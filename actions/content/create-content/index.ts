"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { CreateContentSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { title, boardId, cardId } = data;

  let content;

  try {
    const card = await db.card.findUnique({
      where: {
        id: cardId,
        boardId,
        board: {
          orgId,
        },
      },
    });

    if (!card) {
      return {
        error: "No card found with the given criteria",
      };
    }

    const lastContent = await db.cardContent.findFirst({
      where: { cardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    content = await db.cardContent.create({
      data: {
        title,
        cardId,
        order: lastContent ? lastContent.order + 1 : 1,
      },
    });
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: content };
};

export const createContent = safeCreateAction(CreateContentSchema, handler);
