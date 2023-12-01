"use server";

import { auth } from "@clerk/nextjs";
import { InputType, ReturnType } from "./input-types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { safeCreateAction } from "@/lib/safe-create-action";
import { CreateBoardSchema } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId)
    return {
      error: "Unauthorized",
    };

  const { title, image } = data;
  const [imageId, imageUsername, imageDirectLink, imageThumbUrl, imageFullUrl] =
    image.split(process.env.NEXT_PUBLIC_SPLIT_CHAR!);
  if (
    !imageId ||
    !imageUsername ||
    !imageDirectLink ||
    !imageThumbUrl ||
    !imageFullUrl
  ) {
    return {
      error: "Missing fields. Cannot create the board fields are required",
    };
  }
  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageUsername,
        imageDirectLink,
        imageThumbUrl,
        imageFullUrl,
      },
    });
  } catch (error) {
    return {
      error: "Database Internal Error",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createNewBoard = safeCreateAction(CreateBoardSchema, handler);
