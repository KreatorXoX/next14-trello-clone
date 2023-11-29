import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import React from "react";
import BoardTitleForm from "./board-title-form";
import BoardOptions from "./board-options";

type Props = { id: string };

const BoardNavigation = async ({ id }: Props) => {
  const { orgId } = auth();
  const fetchedBoard = await db.board.findUnique({
    where: {
      orgId: orgId!, // we already redirect user in the layout so we can force ts that there is an orgId present
      id,
    },
  });
  return (
    <div className="w-full h-12 bg-purple-900/30 text-white flex items-center justify-between px-4">
      <BoardTitleForm data={fetchedBoard} />
      <div className="mr-2 p-2 rounded-full hover:bg-gray-300 transition hover:text-purple-700 cursor-pointer">
        <BoardOptions id={id} />
      </div>
    </div>
  );
};

export default BoardNavigation;
