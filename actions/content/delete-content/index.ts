"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { DeleteContentSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { id, boardId } = data;

  let contentToDelete;

  try {
    contentToDelete = await db.cardContent.delete({
      where: {
        id,
        card: {
          board: { orgId },
        },
      },
    });

    if (!contentToDelete) {
      return {
        error: "No content found with the given criteria",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: contentToDelete };
};

export const deleteContent = safeCreateAction(DeleteContentSchema, handler);
