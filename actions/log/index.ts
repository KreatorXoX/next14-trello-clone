"use server";

import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

import { Log } from "@prisma/client";

export const getLogs = async (data: {
  contentId: string;
  boardId: string;
}): Promise<Log[]> => {
  const { userId, orgId } = auth();

  const { contentId, boardId } = data;

  let logs;

  try {
    if (!userId || !orgId) throw new Error("Unauthorized");
    if (!contentId || !boardId) throw new Error("Missing fields");
    logs = await db.log.findMany({
      where: {
        orgId,
        entityId: contentId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    if (!logs) throw new Error("No logs found with the given criteria");
  } catch (error) {
    return Promise.reject(error);
  }

  revalidatePath(`/board/${boardId}`);
  return logs;
};
