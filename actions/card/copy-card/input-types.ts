import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { CopyCardSchema } from "./schema";
import { Card } from "@prisma/client";

export type InputType = z.infer<typeof CopyCardSchema>;
export type ReturnType = ActionState<InputType, Card>;
