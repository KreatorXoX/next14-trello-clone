"use server";

import { revalidatePath } from "next/cache";
import { Log } from "@prisma/client";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const getAllLogs = async (): Promise<Log[]> => {
  const { userId, orgId } = auth();

  let logs;

  try {
    if (!userId || !orgId) return redirect("/select-org");

    logs = await db.log.findMany({
      where: {
        orgId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!logs) throw new Error("No logs found with the given criteria");
  } catch (error) {
    return Promise.reject(error);
  }

  revalidatePath(`/organization/${orgId}`);
  return logs;
};
