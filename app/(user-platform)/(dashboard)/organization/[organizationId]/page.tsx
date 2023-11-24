"use client";
import { Button } from "@/components/ui/button";
import React, { useCallback } from "react";
import { createNewBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/useAction";

type Props = {};

const OrganizationPage = (props: Props) => {
  const { execute, fieldErrors } = useAction(createNewBoard, {
    onSuccess: (data) => console.log(data.title),
    onError: (err) => console.log(err),
  });
  console.log(fieldErrors);
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title: title });
  };
  return (
    <div className="w-full">
      <form action={onSubmit}>
        <input
          type="text"
          placeholder="Enter a board title"
          id="title"
          name="title"
          className="border border-gray-500 p-1 rounded-md"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default OrganizationPage;
