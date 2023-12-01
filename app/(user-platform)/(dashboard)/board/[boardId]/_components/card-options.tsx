import FormSubmitButton from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Card } from "@prisma/client";
import { LogOut, Settings2 } from "lucide-react";
import React from "react";
import { useAction } from "@/hooks/useAction";
import { deleteCard } from "@/actions/delete-card";
import toast from "react-hot-toast";

type Props = { data: Card; onAddContent: () => void };

const CardOptions = ({ data, onAddContent }: Props) => {
  const { execute: executeDeleteCard, isLoading: deleteIsLoading } = useAction(
    deleteCard,
    {
      onSuccess: (data) => {
        toast.success(`${data.title} is deleted`);
      },
    }
  );

  const onDeleteHandler = () => {
    executeDeleteCard({ id: data.id, boardId: data.boardId });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          size={"sm"}
          className="px-2 py-0 my-0 rounded-full h-auto w-auto hover:bg-gray-100/50 transition hover:text-[#3d348b] cursor-pointer"
        >
          <Settings2 className="w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        side="bottom"
        align="end"
        alignOffset={0}
        className="space-y-2 text-sm"
      >
        <div className="relative w-full">
          <div className="text-center font-semibold text-neutral-700 ">
            Card Actions
          </div>
          <Separator className="mt-3" />
          <PopoverClose asChild>
            <button className="absolute -top-[2px] right-0 cursor-pointer z-10 w-7 h-7 text-rose-400 hover:bg-gray-200 transition rounded-md">
              <LogOut />
            </button>
          </PopoverClose>
        </div>

        <Button
          onClick={onAddContent}
          className="w-full justify-start text-neutral-700  "
          size={"sm"}
          variant={"primary_ghost"}
          disabled={deleteIsLoading}
        >
          Add content
        </Button>
        <form action="" className="p-0 m-0">
          <input id="id" name="id" type="text" hidden value={data.id} />
          <input
            id="boardId"
            name="boardId"
            type="text"
            hidden
            value={data.boardId}
          />
          <FormSubmitButton
            innerText="Copy the card"
            customClasses="w-full justify-start text-neutral-700   "
            variant={"ghost"}
            disabled={deleteIsLoading}
          />
        </form>
        <Separator />
        <Button
          onClick={onDeleteHandler}
          className="w-full justify-start text-neutral-700  "
          size={"sm"}
          variant={"destructive_ghost"}
          disabled={deleteIsLoading}
        >
          Delete the card
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default CardOptions;
