import type { Database } from "../services/database.js";
import type { SDK } from "@dojoengine/sdk/node";
import type { SchemaType } from "../generated/models.gen.js";
import type { AxiosInstance } from "axios";

export type WorkerHandler = (
  args: string[],
  botState: BotState
) => Promise<any>;

export interface WorkersService {
  list: Record<string, WorkerHandler>;
  execute: (name: string, args: string[]) => Promise<any>;
}

export interface DojoService {
  sdk: SDK<SchemaType> | null;
  initialize: () => Promise<any>;
}

export interface ApiService {
  api: AxiosInstance | null;
  initialize: () => Promise<AxiosInstance>;
  dispatchAction: (playerAddress: string, actions: string[]) => Promise<any>;
}

// Services type
export interface Services {
  database: Database;
  dojo: DojoService;
  api: ApiService;
  cleanup: () => Promise<void>;
}

// Bot state type
export interface BotState {
  services: Services | null;
  workers: WorkersService | null;
  isReady: boolean;
}
