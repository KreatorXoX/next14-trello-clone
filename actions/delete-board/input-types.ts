import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { DeleteBoardSchema } from "./schema";
import { Board } from "@prisma/client";

export type InputType = z.infer<typeof DeleteBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;
