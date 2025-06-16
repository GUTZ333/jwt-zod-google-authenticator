import { z } from "zod";

export const createUserSchema = z.object({
  userName: z.string(),
  userEmail: z.string().email(),
  userAge: z.number().int(),
  userPswd: z.string(),
  userMobilePhone: z.string(),
});
