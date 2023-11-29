import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import CardList from "./_components/card-list";

type Props = { params: { boardId: string } };

const BoardPage = async ({ params }: Props) => {
  const boardId = params.boardId;
  const { orgId } = auth();
  if (!orgId) {
    return redirect("/select-org");
  }
  const cards = await db.card.findMany({
    where: {
      boardId,
      board: {
        orgId,
      },
    },
    include: {
      contents: {
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });
  return (
    <div className="p-4 h-[calc(100vh-7rem)] overflow-x-auto ">
      <CardList boardId={params.boardId} data={cards} />
    </div>
  );
};

export default BoardPage;
