"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { CopyCardSchema } from "./schema";
import { generateFunnyName } from "@/config/generateName";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { id, boardId } = data;

  let newlyCopiedCard;

  try {
    const cardToCopy = await db.card.findUnique({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
      include: { contents: true },
    });

    if (!cardToCopy) {
      return {
        error: "No card found with the given criteria",
      };
    }

    const lastContent = await db.card.findFirst({
      where: { boardId },
      orderBy: { order: "desc" },
      select: { order: true },
    });

    newlyCopiedCard = await db.card.create({
      data: {
        boardId: cardToCopy.boardId,
        title: generateFunnyName(),

        order: lastContent ? lastContent.order : 1,
      },
    });

    for (const originalContent of cardToCopy.contents) {
      await prisma?.cardContent.create({
        data: {
          title: originalContent.title,
          description: originalContent.description,
          order: originalContent.order,
          cardId: newlyCopiedCard.id,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: newlyCopiedCard };
};

export const copyCard = safeCreateAction(CopyCardSchema, handler);
