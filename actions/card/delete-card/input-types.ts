import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { DeleteCardSchema } from "./schema";
import { Card } from "@prisma/client";

export type InputType = z.infer<typeof DeleteCardSchema>;
export type ReturnType = ActionState<InputType, Card>;
