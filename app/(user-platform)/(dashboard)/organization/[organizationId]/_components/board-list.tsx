import CustomTooltip from "@/components/custom-tooltip";
import FormNewBoard from "@/components/form/form-new-board";
import { ClipboardList, FileQuestion } from "lucide-react";
import React from "react";

type Props = {};

const BoardList = (props: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 ">
        <ClipboardList className="text-neutral-500 w-7 h-7" />
        <span className="font-semibold">Your Boards</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-1">
        <FormNewBoard side="top" align="start" offset={-120}>
          <div
            className="bg-gray-200 aspect-[2/1]
          relative w-full h-full flex flex-col gap-1 items-center justify-center hover:bg-gray-300/80 transition rounded shadow-md"
            role="button"
          >
            <p>Create new board</p>
            <span className="text-xs flex items-center gap-1 italic">
              3 remaining
              <CustomTooltip innerText="As free tier user you can only have 5 boards at most. Subscribe to get unlimited board">
                <FileQuestion className="w-5 h-5 text-rose-300" />
              </CustomTooltip>
            </span>
          </div>
        </FormNewBoard>
      </div>
    </div>
  );
};

export default BoardList;
