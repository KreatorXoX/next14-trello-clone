"use client";
import { useState, useRef, ElementRef } from "react";
import CardWrapper from "./card-wrapper";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FormInput } from "@/components/form/form-input";

type Props = {};

const CardForm = (props: Props) => {
  const [isEditMode, setEditMode] = useState(false);
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const onEditHandler = () => {
    setEditMode(true);
    // setTimeout needed because when button clicked and edit mode is activated ref dont select all or focuses the input
    // because of the conditional return
    setTimeout(() => {
      inputRef.current?.focus();
    }, 30);
  };
  useOutsideClick(() => setEditMode(false), formRef);

  if (isEditMode) {
    return (
      <CardWrapper>
        <form ref={formRef} className="w-full p-2 space-y-4">
          <FormInput ref={inputRef} id="title" defaultValue="" />
        </form>
      </CardWrapper>
    );
  }
  return (
    <CardWrapper>
      <button
        className="w-full rounded p-2 bg-white text-destructive hover:bg-white/80 transition"
        onClick={() => setEditMode(true)}
      >
        Add a list
      </button>
    </CardWrapper>
  );
};

export default CardForm;
