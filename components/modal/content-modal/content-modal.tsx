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
import ContentTitle from "./content-title";

type Props = {};

const ContentModal = (props: Props) => {
  const [isEditMode, setEditMode] = useState(false);

  const descriptionInputRef = useRef<ElementRef<"input">>(null);

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
            {data ? (
              <ContentTitle
                id={data.id}
                boardId={data.card.boardId}
                cardTitle={data.card.title}
                originalTitle={data.title}
              />
            ) : (
              <ContentTitle.Skeleton />
            )}
          </DialogTitle>
          <DialogDescription className="text-xs font-light text-rose-400">
            ** Make sure to save when you are done.
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
