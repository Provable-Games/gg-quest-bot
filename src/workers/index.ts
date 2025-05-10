import type {
  BotState,
  WorkerHandler,
  WorkersService,
} from "../types/index.js";
import { monitorQuests } from "./monitorQuests.js";

/**
 * Initialize commands with access to bot state
 * @param {BotState} botState - The shared bot state
 * @returns {Promise<CommandsService>} - The command handlers
 */
export async function initializeWorkers(
  botState: BotState
): Promise<WorkersService> {
  // Create command collection with access to services
  const workers: Record<string, WorkerHandler> = {
    monitorQuests: (args, state) => monitorQuests(args, state),
    // Add more commands here
  };

  console.log(`Registered ${Object.keys(workers).length} workers!`);

  // Function to execute commands
  const executeWorker = async (name: string, args: string[]): Promise<any> => {
    const worker = workers[name];

    if (!worker) {
      return console.log(`Unknown worker: ${name}`);
    }

    try {
      await worker(args, botState);
    } catch (error) {
      console.error(`Error executing worker ${name}:`, error);
      return console.log("There was an error executing that worker!");
    }
  };

  return {
    list: workers,
    execute: executeWorker,
  };
}
