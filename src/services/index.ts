import { initDatabase } from "./database.js";
import type { Database } from "./database.js";
import { initDojoService } from "./dojoService.js";
import type {
  DojoService,
  BotState,
  Services,
  ApiService,
} from "../types/index.js";
import { initApiService } from "./api.js";

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
  const api: ApiService = await initApiService();

  // Create a cleanup function for graceful shutdown
  const cleanup = async (): Promise<void> => {
    console.log("Cleaning up services...");
    await database.disconnect();
    // Other cleanup tasks
  };

  return {
    database,
    dojo,
    api,
    cleanup,
  };
}
