"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { CreateBoardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();

  if (!userId)
    return {
      error: "Unauthorized",
    };

  const { title } = data;

  let board;

  try {
    board = await db.board.create({ data: { title } });
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createNewBoard = safeCreateAction(CreateBoardSchema, handler);
