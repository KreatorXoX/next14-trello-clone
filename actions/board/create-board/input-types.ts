import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { CreateBoardSchema } from "./schema";
import { Board } from "@prisma/client";

export type InputType = z.infer<typeof CreateBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;
