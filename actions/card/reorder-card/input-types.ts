import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { ReorderCardSchema } from "./schema";
import { Card } from "@prisma/client";

export type InputType = z.infer<typeof ReorderCardSchema>;
export type ReturnType = ActionState<InputType, Card[]>;