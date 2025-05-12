import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DS_ADDRESS: z.string(),
  WORLD_ADDRESS: z.string(),
  TORII_URL: z.string(),
  START: z.string(),
  IDENTITY: z.string(),
  SECRET_KEY: z.string(),
  GAME_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
