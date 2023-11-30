"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { CreateCardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { title, boardId } = data;

  let card;

  try {
    const board = await db.board.findUnique({
      where: {
        id: boardId,
        orgId,
      },
    });

    if (!board) {
      return {
        error: "No board found for card to be inserted",
      };
    } else {
      const latestCard = await db.card.findFirst({
        where: { boardId },
        orderBy: { order: "desc" },
      });

      card = await db.card.create({
        data: {
          boardId,
          title,
          order: latestCard ? latestCard.order + 1 : 1,
        },
      });
    }
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card };
};

export const createCard = safeCreateAction(CreateCardSchema, handler);
