"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/form/form-input";

import React, { ElementRef, useEffect, useRef, useState } from "react";
import { useContentModal } from "@/hooks/useContentModal";
import { useQuery } from "@tanstack/react-query";
import { getContentByID } from "@/actions/content/get-content";
import toast from "react-hot-toast";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Keyboard, WalletCards } from "lucide-react";

type Props = {};

const ContentModal = (props: Props) => {
  const [isEditMode, setEditMode] = useState(false);
  const titleInputRef = useRef<ElementRef<"input">>(null);
  const descriptionInputRef = useRef<ElementRef<"input">>(null);
  useOutsideClick(() => setEditMode(false), titleInputRef);
  useOutsideClick(() => setEditMode(false), descriptionInputRef);

  const id = useContentModal((state) => state.id);
  const boardId = useContentModal((state) => state.boardId);
  const isOpen = useContentModal((state) => state.isOpen);
  const onClose = useContentModal((state) => state.onClose);

  const { data, error } = useQuery({
    queryKey: ["content", id],
    queryFn: () => getContentByID({ contentId: id!, boardId: boardId! }),
    enabled: !!id,
  });

  console.log(data);

  useEffect(() => {
    if (error) {
      onClose();
      toast.error(error.message);
    }
  }, [error, onClose]);

  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center w-full gap-1">
              <Keyboard className="text-neutral-700 w-6 h-6" />
              <form action="" className="space-y-4  mb-0 pb-0 ">
                <FormInput
                  id="title"
                  defaultValue={data?.title}
                  ref={titleInputRef}
                  customClasses="cursor-pointer py-0 my-0  border-none focus-visible:italic focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </form>
            </div>
          </DialogTitle>
          <DialogDescription className="text-xs font-medium">
            Make changes to your content here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>

        {/* {isEditMode ? (
          <form action="" className="space-y-4">
            <FormInput
              id="title"
              defaultValue={data?.title}
              ref={titleInputRef}
            />
            <FormInput
              id="description"
              defaultValue={data?.description || ""}
              ref={descriptionInputRef}
            />
            <DialogFooter>
              <Button type="submit" variant={"primary"}>
                Save changes
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <div>
            {data?.title}
            {data?.description}
          </div>
        )} */}
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
