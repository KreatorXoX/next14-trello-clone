import { z } from "zod";

import { ActionState } from "@/lib/safe-create-action";
import { DeleteContentSchema } from "./schema";
import { CardContent } from "@prisma/client";

export type InputType = z.infer<typeof DeleteContentSchema>;
export type ReturnType = ActionState<InputType, CardContent>;
