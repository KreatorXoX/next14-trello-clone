import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { UpdateBoardSchema } from "./schema";
import { Board } from "@prisma/client";

export type InputType = z.infer<typeof UpdateBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;
