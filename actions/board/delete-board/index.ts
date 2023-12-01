"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { DeleteBoardSchema } from "./schema";
import { redirect } from "next/navigation";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { id } = data;

  let boardToDelete;

  try {
    boardToDelete = await db.board.delete({
      where: {
        id,
        orgId,
      },
    });
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/organization/${orgId}`);
  return redirect(`/organization/${orgId}`);
};

export const deleteBoard = safeCreateAction(DeleteBoardSchema, handler);
