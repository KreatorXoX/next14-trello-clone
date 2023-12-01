"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { UpdateBoardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { title, id } = data;

  let updatedBoard;

  try {
    updatedBoard = await db.board.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${id}`);
  return { data: updatedBoard };
};

export const updateBoard = safeCreateAction(UpdateBoardSchema, handler);
