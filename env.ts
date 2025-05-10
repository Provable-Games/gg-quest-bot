import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  IDENTITY: z.string(),
  SECRET_KEY: z.string(),
  GAME_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
