"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { createNewBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/useAction";
import { FormInput } from "@/components/form/form-input";
import FormSubmitButton from "@/components/form/form-submit";

type Props = {};

const OrganizationPage = (props: Props) => {
  const { execute, fieldErrors } = useAction(createNewBoard);

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <div className="w-full">
      <form action={onSubmit}>
        <FormInput
          label="Board Title"
          type="text"
          placeholder="Enter a board title"
          id="title"
          errors={fieldErrors}
        />
        <FormSubmitButton innerText="Save" />
      </form>
    </div>
  );
};

export default OrganizationPage;
