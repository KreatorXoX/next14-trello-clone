"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { UpdateContentSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { id, boardId, ...cardContent } = data;

  let updatedContent;

  try {
    updatedContent = await db.cardContent.update({
      where: {
        id,
        card: { board: { orgId } },
      },
      data: {
        ...cardContent,
      },
    });
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: updatedContent };
};

export const updateCardContent = safeCreateAction(UpdateContentSchema, handler);
