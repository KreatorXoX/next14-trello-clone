"use client";

import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

import { createNewBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/useAction";

import {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverContent,
} from "../ui/popover";

import { FormInput } from "./form-input";
import FormSubmitButton from "./form-submit";
import { LogOut, User } from "lucide-react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  offset?: number;
  align?: "start" | "center" | "end";
};

const FormNewBoard = ({
  children,
  side = "bottom",
  offset = 4,
  align = "start",
}: Props) => {
  const { user } = useUser();

  const { execute, fieldErrors } = useAction(createNewBoard, {
    onSuccess: (data) => {
      console.log(data);
      //   toast.custom((t) => (
      //     <div
      //       className={`${
      //         t.visible ? "animate-in" : ""
      //       } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      //     >
      //       <div className="flex-1 w-0 p-4">
      //         <div className="flex items-start">
      //           <div className="flex-shrink-0 pt-0.5 h-10 w-10 relative">
      //             {user?.imageUrl ? (
      //               <Image
      //                 className=" rounded-full"
      //                 fill
      //                 src={user?.imageUrl}
      //                 alt=""
      //               />
      //             ) : (
      //               <User />
      //             )}
      //           </div>
      //           <div className="ml-3 flex-1">
      //             <p className="text-sm font-medium text-gray-900">
      //               {user?.firstName || "Guest"}
      //             </p>
      //             <p className="mt-1 text-sm text-gray-500">Congrats</p>
      //           </div>
      //         </div>
      //       </div>
      //       <div className="flex border-l border-gray-200">
      //         <button
      //           onClick={() => toast.dismiss(t.id)}
      //           className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      //         >
      //           Close
      //         </button>
      //       </div>
      //     </div>
      //   ));
    },
    onError: (err) => console.log(err),
    onComplete: () => {
      console.log("completed");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        sideOffset={offset}
        side={side}
        className="w-80 py-2"
      >
        <div className="text-sm text-center font-semibold">Create Board</div>
        <PopoverClose
          asChild
          className="absolute top-[5px] right-2 cursor-pointer w-7 h-7 text-rose-400 hover:bg-gray-200 transition p-1 rounded-md"
        >
          <LogOut />
        </PopoverClose>
        <form className="space-y-3 my-2" action={onSubmit}>
          <div>
            <FormInput id="title" label="Board Title" errors={fieldErrors} />
          </div>
          <FormSubmitButton innerText="Create" customClasses="w-full " />
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default FormNewBoard;
