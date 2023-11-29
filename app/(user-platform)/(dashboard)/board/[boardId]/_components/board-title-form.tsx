"use client";

import { updateBoard } from "@/actions/update-board";
import { FormInput } from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { Board } from "@prisma/client";
import { useState, useRef, ElementRef } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

type Props = { data: Board | null };

const BoardTitleForm = ({ data }: Props) => {
  const { execute } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Title is updated : ${data.title}`);
      setTitle(data.title);
      setEditMode(false);
    },
    onError: (err) => {
      console.log(err);
      setTitle(data?.title);
    },
  });

  const [title, setTitle] = useState(data?.title);
  const [isEditMode, setEditMode] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const onEditHandler = () => {
    setEditMode(true);
    // setTimeout needed because when button clicked and edit mode is activated ref dont select all or focuses the input
    // because of the conditional return
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 30);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    if (title === data?.title || !data) {
      setEditMode(false);
      return console.log("Title not changed");
    }
    execute({ title, id: data.id });
  };

  if (isEditMode) {
    return (
      <form action={onSubmit} ref={formRef}>
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={() => {
            formRef.current?.requestSubmit();
          }}
          defaultValue={title}
          customClasses="w-full text-start"
        />
      </form>
    );
  }
  return (
    <Button onClick={onEditHandler} variant={"edit"}>
      {title}
    </Button>
  );
};

export default BoardTitleForm;
