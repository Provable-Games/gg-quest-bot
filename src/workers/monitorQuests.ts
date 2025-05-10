import { createWorker } from "@dojoengine/sdk/node";
import { subscribeToGamesQuery } from "../dojo/queries/sdk.ts";
import type { BotState } from "../types/index.ts";
import { ACTIONS_MAP, NAMESPACE } from "../lib/constants.ts";
import { formatTokenMetadata } from "../lib/formatting.ts";

// Define an interface for our game state
interface GameState {
  tokenInfo: any;
  tokenMetadata: any; // Replace 'any' with your TokenMetadata type
  score: number;
}

// Store games with their metadata and scores
const games = new Map<number, GameState>();

export async function monitorQuests(args: string[], botState: BotState) {
  await createWorker(async () => {
    async function onEntityUpdated({ data, error }) {
      if (error) {
        console.error(error);
        return;
      }

      const entity = data.pop();
      if (entity && entity.entityId !== "0x0") {
        const tokenMetadata = entity.models.ds_v1_2_0.TokenMetadata;
        const gameModel = entity.models.ds_v1_2_0.Game;

        if (tokenMetadata) {
          const formattedTokenMetadata = formatTokenMetadata(tokenMetadata);
          const tokenId = formattedTokenMetadata.token_id;

          // Initialize or update the game state
          if (!games.has(tokenId)) {
            // First time seeing this token, initialize with score 0
            games.set(tokenId, {
              tokenMetadata: formattedTokenMetadata,
              score: 0,
              tokenInfo: {},
            });
          } else {
            // Update only the token metadata, keep existing score
            const existingState = games.get(tokenId)!;
            games.set(tokenId, {
              ...existingState,
              tokenMetadata: formattedTokenMetadata,
            });
          }
        }

        if (gameModel) {
          const tokenId = gameModel.game_id;
          const newScore = gameModel.hero_xp;

          // Update only the score if we have this game
          if (games.has(tokenId)) {
            const existingState = games.get(tokenId)!;
            games.set(tokenId, {
              ...existingState,
              score: newScore,
            });
          }

          if (gameModel.hero_health <= 0) {
            const playerAddress = games.get(tokenId)?.tokenInfo.account_address;
            const settingsId = games.get(tokenId)?.tokenMetadata.settings_id;
            const action = ACTIONS_MAP[settingsId];
            if (action) {
              try {
                if (!botState.services?.api?.dispatchAction) {
                  throw new Error("API service not initialized");
                }

                // Send the completion action to GG Quest
                await botState.services.api.dispatchAction(playerAddress, [
                  action,
                ]);

                console.log("Quest completion successfully reported");
              } catch (error) {
                console.error("Failed to report quest completion:", error);
              }
            }
          }
        }
      }
    }

    async function onTokenUpdated(data: any) {
      if (data.contract_address !== "0x0") {
        const tokenId = Number(data.token_id);
        // Update only the score if we have this game
        if (games.has(tokenId)) {
          const existingState = games.get(tokenId)!;
          games.set(tokenId, {
            ...existingState,
            score: Number(data.balance),
            tokenInfo: data,
          });
        } else {
          games.set(tokenId, {
            tokenMetadata: {},
            score: 0,
            tokenInfo: data,
          });
        }
      }
    }

    if (!botState.services?.dojo?.sdk) {
      throw new Error("Dojo service not initialized");
    }
    const { sdk } = botState.services?.dojo;

    const query = subscribeToGamesQuery(NAMESPACE);

    const response = await sdk.subscribeEntityQuery({
      query,
      callback: onEntityUpdated,
    });

    const response2 = await sdk.onTokenBalanceUpdated({
      contractAddresses: [
        "0x25dd1faa4f94d1ddd523d7db4697c10a34a09d7b55b4758995a070fd9d61498",
      ],
      accountAddresses: [],
      tokenIds: [],
      callback: onTokenUpdated,
    });

    if (!response || !response2) {
      throw new Error("Failed to subscribe to entity query");
    }

    const [_entities, sub] = response;

    return [sub, response2];
  });
}
