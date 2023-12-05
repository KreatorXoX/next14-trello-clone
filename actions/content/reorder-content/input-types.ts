import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { ReorderContentSchema } from "./schema";
import { CardContent } from "@prisma/client";

export type InputType = z.infer<typeof ReorderContentSchema>;
export type ReturnType = ActionState<InputType, CardContent[]>;
