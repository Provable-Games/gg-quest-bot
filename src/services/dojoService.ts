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
        toriiUrl: "https://api.cartridge.gg/x/darkshuffle-sepolia/torii",
        relayUrl: "",
        worldAddress:
          "0x4e2023f1c633ccb98a5c7b40bd23c01742c10a635a04dbfd0417944a3d7d042",
      },
      domain: {
        name: "WORLD_NAME",
        version: "1.0",
        chainId: "KATANA",
        revision: "1",
      },
      identity: env.IDENTITY,
      signer: SigningKey.fromSecretScalar(env.SECRET_KEY),
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
