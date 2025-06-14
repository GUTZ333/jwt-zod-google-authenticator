import { z } from "zod";

const envSchemas = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
});

export const env = envSchemas.parse(process.env);
