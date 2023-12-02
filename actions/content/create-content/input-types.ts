import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { CreateContentSchema } from "./schema";
import { CardContent } from "@prisma/client";

export type InputType = z.infer<typeof CreateContentSchema>;
export type ReturnType = ActionState<InputType, CardContent>;
