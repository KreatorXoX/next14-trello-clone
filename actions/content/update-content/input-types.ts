import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { UpdateContentSchema } from "./schema";
import { CardContent } from "@prisma/client";

export type InputType = z.infer<typeof UpdateContentSchema>;
export type ReturnType = ActionState<InputType, CardContent>;
