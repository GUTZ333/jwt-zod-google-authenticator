import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
  JWT_EXPIRES_IN: z.string().default("1h"),
  JWT_SECRET_KEY: z.string(),
});

export const envs = envSchema.parse(process.env);
