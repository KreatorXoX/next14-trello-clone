"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { CopyContentSchema } from "./schema";
import { generateFunnyName } from "@/config/generateName";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { id, boardId } = data;

  let newlyCopiedContent;

  try {
    const contentToCopy = await db.cardContent.findUnique({
      where: {
        id,
        card: {
          board: { orgId },
        },
      },
    });

    if (!contentToCopy) {
      return {
        error: "No content found with the given criteria",
      };
    }

    const lastContent = await db.cardContent.findFirst({
      where: { cardId: contentToCopy.cardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    newlyCopiedContent = await db.cardContent.create({
      data: {
        title: contentToCopy.title + " " + "(Copy)",
        description: contentToCopy.description,
        order: lastContent ? lastContent.order : 1,
        cardId: contentToCopy.cardId,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: newlyCopiedContent };
};

export const copyContent = safeCreateAction(CopyContentSchema, handler);
