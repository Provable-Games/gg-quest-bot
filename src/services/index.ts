import { initDatabase } from "./database.js";
import type { Database } from "./database.js";
import { initDojoService } from "./dojoService.js";
import type {
  DojoService,
  BotState,
  Services,
  GGQuestApiService,
} from "../types/index.js";
import { initGGQuestApiService } from "./ggQuestApi.js";

export interface ExtendedServices extends Services {
  dojo: DojoService;
}

export async function initializeServices(
  botState: BotState
): Promise<ExtendedServices> {
  // Initialize database connection
  const database: Database = await initDatabase();

  // Initialize Dojo SDK
  const dojo: DojoService = await initDojoService();

  // Initialize API service
  const ggQuestApi: GGQuestApiService = await initGGQuestApiService();

  // Create a cleanup function for graceful shutdown
  const cleanup = async (): Promise<void> => {
    console.log("Cleaning up services...");
    await database.disconnect();
    // Other cleanup tasks
  };

  return {
    database,
    dojo,
    ggQuestApi,
    cleanup,
  };
}
