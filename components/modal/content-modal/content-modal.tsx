"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import React, { useEffect } from "react";
import { useContentModal } from "@/hooks/useContentModal";
import { useQuery } from "@tanstack/react-query";
import { getContentByID } from "@/actions/content/get-content";
import toast from "react-hot-toast";

import ContentTitle from "./content-title";

import ContentDescription from "./content-description";

type Props = {};

const ContentModal = (props: Props) => {
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
      <DialogContent
        className="sm:max-w-[425px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle autoFocus={false}>
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
            **All the changes are automatically saved!
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3">
          <div className="col-span-3">
            <div className="w-full space-y-6">
              {data ? (
                <ContentDescription
                  originalDescription={data.description}
                  boardId={data.card.boardId}
                  contentId={data.id}
                />
              ) : (
                <ContentDescription.Skeleton />
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
