import { type SDK, init } from "@dojoengine/sdk/node";
import type { SchemaType } from "../generated/models.gen.ts";
import type { DojoService } from "../types/index.ts";
import { w3cwebsocket } from "websocket";
import { SigningKey } from "@dojoengine/torii-wasm/node";
import { env } from "../../env.ts";

export async function initDojoService(): Promise<DojoService> {
  let sdkInstance: SDK<SchemaType> | null = null;

  const initialize = async (): Promise<SDK<SchemaType>> => {
    if (sdkInstance) return sdkInstance;

    console.log("Initializing Dojo SDK...");

    // Those lines are require so that websocket works.
    // @ts-ignore
    global.Websocket = w3cwebsocket;
    // @ts-ignore
    global.WorkerGlobalScope = global;

    sdkInstance = await init<SchemaType>({
      client: {
        toriiUrl: env.TORII_URL,
        relayUrl: "",
        worldAddress: env.WORLD_ADDRESS,
      },
      domain: {
        name: "Provable Games",
        version: "1.0",
        chainId: "SN_SEPOLIA",
        revision: "1",
      },
    });

    console.log("Dojo SDK initialized successfully");
    return sdkInstance;
  };

  // Initialize immediately
  await initialize();

  return {
    sdk: sdkInstance,
    initialize,
  };
}
