import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DS_ADDRESS: z.string(),
  WORLD_ADDRESS: z.string(),
  TORII_URL: z.string(),
  START: z.string(),
  GAME_SECRET: z.string(),
  QUEST_URL: z.string(),
});

export const env = envSchema.parse(process.env);
