"use server";

import { revalidatePath } from "next/cache";
import { Board, Log } from "@prisma/client";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const getAllBoards = async (): Promise<Board[]> => {
  const { userId, orgId } = auth();

  let boards;

  try {
    if (!userId || !orgId) throw new Error("Unauthorized");

    boards = await db.board.findMany({
      where: {
        orgId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!boards) throw new Error("No logs found with the given criteria");
  } catch (error) {
    return Promise.reject(error);
  }

  revalidatePath(`/organization/${orgId}`);
  return boards;
};
