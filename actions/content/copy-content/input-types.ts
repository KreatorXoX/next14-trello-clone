import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { CopyContentSchema } from "./schema";
import { CardContent } from "@prisma/client";

export type InputType = z.infer<typeof CopyContentSchema>;
export type ReturnType = ActionState<InputType, CardContent>;
