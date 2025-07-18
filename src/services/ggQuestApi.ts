import axios, { AxiosInstance } from "axios";
import type { GGQuestApiService } from "../types/index.ts";
import { env } from "../../env.ts";

interface QuestAction {
  actions: string[];
  playerAddress: string;
}

export async function initGGQuestApiService(): Promise<GGQuestApiService> {
  let apiInstance: AxiosInstance | null = null;

  const initialize = async (): Promise<AxiosInstance> => {
    if (apiInstance) return apiInstance;

    console.log("Initializing API Service...");

    apiInstance = axios.create({
      baseURL: env.QUEST_URL,
      headers: {
        "Content-Type": "application/json",
        secret: env.GAME_SECRET,
      },
    });
    console.log("API Service initialized successfully");
    return apiInstance;
  };

  const dispatchAction = async (playerAddress: string, actions: string[]) => {
    if (!apiInstance) {
      throw new Error("API service not initialized");
    }

    try {
      const payload: QuestAction = {
        actions,
        playerAddress,
      };

      const response = await apiInstance.post("", payload);
      console.log("Action dispatched successfully:", response.data);
      return response.data;
      // console.log("Action dispatched successfully:", payload);
    } catch (error) {
      console.error("Failed to dispatch action:", error);
      throw error;
    }
  };

  // Initialize immediately
  await initialize();

  return {
    api: apiInstance,
    initialize,
    dispatchAction,
  };
}
