import { initializeServices } from "./services/index.ts";
import type { BotState } from "./types/index.js";
import { initializeWorkers } from "./workers/index.ts";

// Create a bot state object to share across modules
export const botState: BotState = {
  workers: null,
  services: null,
  isReady: false,
};

/**
 * Initialize the bot and return the shared state
 * @returns {Promise<BotState>} The initialized bot state
 */
export async function initializeBot(): Promise<BotState> {
  console.log("Initializing bot...");

  try {
    // Initialize services first (database connections, dojo service)
    console.log("Initializing services...");
    const services = await initializeServices(botState);
    botState.services = services;

    // Initialize workers with access to services
    console.log("Registering workers...");
    const workers = await initializeWorkers(botState);
    botState.workers = workers;

    botState.isReady = true;
    console.log("Bot initialization complete!");

    return botState;
  } catch (error) {
    console.error("Failed to initialize bot:", error);
    throw error;
  }
}

// If this file is run directly, initialize the bot
if (import.meta.url.endsWith(process.argv[1])) {
  const type = process.argv[2]; // 'command' or 'worker'
  const name = process.argv[3]; // name of the command or worker
  const args = process.argv.slice(4);

  initializeBot()
    .then((state) => {
      if (type === "worker" && state.workers) {
        if (name) {
          state.workers.execute(name, args);
        } else {
          console.log("Available workers:", Object.keys(state.workers.list));
        }
      } else {
        console.log("Usage:");
        console.log(
          "  For workers: bun run src/index.ts worker <worker-name> [args...]"
        );
        console.log(
          "Available workers:",
          Object.keys(state.workers?.list || {})
        );
      }
    })
    .catch((err) => {
      console.error("Fatal error during initialization:", err);
      process.exit(1);
    });
}
