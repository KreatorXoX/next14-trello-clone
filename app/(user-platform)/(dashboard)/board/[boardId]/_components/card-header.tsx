"use client";

import { updateCard } from "@/actions/update-card";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/useAction";
import { Card } from "@prisma/client";
import { useState, useRef, ElementRef } from "react";
import toast from "react-hot-toast";

type Props = { data: Card };

const CardHeader = ({ data }: Props) => {
  const [title, setTitle] = useState(data?.title);
  const [isEditMode, setEditMode] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const { execute } = useAction(updateCard, {
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

  const onEditHandler = () => {
    setEditMode(true);
    // setTimeout needed because when button clicked and edit mode is activated ref dont select all or focuses the input
    // because of the conditional return
    setTimeout(() => {
      inputRef.current?.select();
    }, 30);
  };

  const onSubmitHandler = (formData: FormData) => {
    const title = formData.get("title") as string;
    if (!title || title === data?.title || !data) {
      setEditMode(false);
      setTitle(data.title);
      return console.log("Title not changed");
    }

    execute({ id: data.id, boardId: data.boardId, title });
  };

  if (isEditMode) {
    return (
      <form
        action={onSubmitHandler}
        ref={formRef}
        className="flex flex-col gap-1 px-2"
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={() => {
            formRef.current?.requestSubmit();
          }}
          defaultValue={title}
          customClasses="w-full text-start p-0 m-0 bg-transparent border-none focus-visible:text-white
          text-white disabled:text-white disabled:opacity-100 disabled:italic focus-visible:ring-offset-0
          focus-visible:ring-0 focus-visible:border-none focus:visible:m-0 h-auto pt-2 pb-1 focus-visible:italic

          "
          placeholder="Card title"
        />
        <button type="submit" hidden></button>
        <div className="w-full h-[0.15rem] rounded bg-neutral-300"></div>
      </form>
    );
  }
  return (
    <div
      onClick={onEditHandler}
      className="font-semibold text-sm w-full flex flex-col gap-2 select-none px-2"
    >
      <p className="pt-2 font-medium">{title}</p>
      <div className="w-full h-[0.15rem] rounded bg-neutral-300"></div>
    </div>
  );
};

export default CardHeader;
