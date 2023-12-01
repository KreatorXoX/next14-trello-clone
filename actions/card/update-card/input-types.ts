import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { UpdateCardSchema } from "./schema";
import { Card } from "@prisma/client";

export type InputType = z.infer<typeof UpdateCardSchema>;
export type ReturnType = ActionState<InputType, Card>;
