import { DojoProvider, DojoCall } from "@dojoengine/core";
import { Account, AccountInterface, BigNumberish, CairoOption, CairoCustomEnum, ByteArray } from "starknet";
import * as models from "./models.gen";

export function setupWorld(provider: DojoProvider) {

	const build_battle_systems_battleActions_calldata = (gameId: BigNumberish, battleId: BigNumberish, actions: Array<Array<BigNumberish>>): DojoCall => {
		return {
			contractName: "battle_systems",
			entrypoint: "battle_actions",
			calldata: [gameId, battleId, actions],
		};
	};

	const battle_systems_battleActions = async (snAccount: Account | AccountInterface, gameId: BigNumberish, battleId: BigNumberish, actions: Array<Array<BigNumberish>>) => {
		try {
			return await provider.execute(
				snAccount,
				build_battle_systems_battleActions_calldata(gameId, battleId, actions),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_addCreatureCard_calldata = (name: BigNumberish, rarity: BigNumberish, cost: BigNumberish, attack: BigNumberish, health: BigNumberish, cardType: BigNumberish, playEffect: models.CardEffect, attackEffect: models.CardEffect, deathEffect: models.CardEffect): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "add_creature_card",
			calldata: [name, rarity, cost, attack, health, cardType, playEffect, attackEffect, deathEffect],
		};
	};

	const config_systems_addCreatureCard = async (snAccount: Account | AccountInterface, name: BigNumberish, rarity: BigNumberish, cost: BigNumberish, attack: BigNumberish, health: BigNumberish, cardType: BigNumberish, playEffect: models.CardEffect, attackEffect: models.CardEffect, deathEffect: models.CardEffect) => {
		try {
			return await provider.execute(
				snAccount,
				build_config_systems_addCreatureCard_calldata(name, rarity, cost, attack, health, cardType, playEffect, attackEffect, deathEffect),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_addRandomSettings_calldata = (): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "add_random_settings",
			calldata: [],
		};
	};

	const config_systems_addRandomSettings = async (snAccount: Account | AccountInterface) => {
		try {
			return await provider.execute(
				snAccount,
				build_config_systems_addRandomSettings_calldata(),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_addSettings_calldata = (name: BigNumberish, description: ByteArray, startingHealth: BigNumberish, startEnergy: BigNumberish, startHandSize: BigNumberish, draftSize: BigNumberish, maxEnergy: BigNumberish, maxHandSize: BigNumberish, drawAmount: BigNumberish, cardIds: Array<BigNumberish>, cardRarityWeights: models.CardRarityWeights, autoDraft: boolean, persistentHealth: boolean, possibleBranches: BigNumberish, levelDepth: BigNumberish, enemyAttackMin: BigNumberish, enemyAttackMax: BigNumberish, enemyHealthMin: BigNumberish, enemyHealthMax: BigNumberish, enemyAttackScaling: BigNumberish, enemyHealthScaling: BigNumberish): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "add_settings",
			calldata: [name, description, startingHealth, startEnergy, startHandSize, draftSize, maxEnergy, maxHandSize, drawAmount, cardIds, cardRarityWeights, autoDraft, persistentHealth, possibleBranches, levelDepth, enemyAttackMin, enemyAttackMax, enemyHealthMin, enemyHealthMax, enemyAttackScaling, enemyHealthScaling],
		};
	};

	const config_systems_addSettings = async (snAccount: Account | AccountInterface, name: BigNumberish, description: ByteArray, startingHealth: BigNumberish, startEnergy: BigNumberish, startHandSize: BigNumberish, draftSize: BigNumberish, maxEnergy: BigNumberish, maxHandSize: BigNumberish, drawAmount: BigNumberish, cardIds: Array<BigNumberish>, cardRarityWeights: models.CardRarityWeights, autoDraft: boolean, persistentHealth: boolean, possibleBranches: BigNumberish, levelDepth: BigNumberish, enemyAttackMin: BigNumberish, enemyAttackMax: BigNumberish, enemyHealthMin: BigNumberish, enemyHealthMax: BigNumberish, enemyAttackScaling: BigNumberish, enemyHealthScaling: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_config_systems_addSettings_calldata(name, description, startingHealth, startEnergy, startHandSize, draftSize, maxEnergy, maxHandSize, drawAmount, cardIds, cardRarityWeights, autoDraft, persistentHealth, possibleBranches, levelDepth, enemyAttackMin, enemyAttackMax, enemyHealthMin, enemyHealthMax, enemyAttackScaling, enemyHealthScaling),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_addSpellCard_calldata = (name: BigNumberish, rarity: BigNumberish, cost: BigNumberish, cardType: BigNumberish, effect: models.CardEffect, extraEffect: models.CardEffect): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "add_spell_card",
			calldata: [name, rarity, cost, cardType, effect, extraEffect],
		};
	};

	const config_systems_addSpellCard = async (snAccount: Account | AccountInterface, name: BigNumberish, rarity: BigNumberish, cost: BigNumberish, cardType: BigNumberish, effect: models.CardEffect, extraEffect: models.CardEffect) => {
		try {
			return await provider.execute(
				snAccount,
				build_config_systems_addSpellCard_calldata(name, rarity, cost, cardType, effect, extraEffect),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_gameSettings_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "game_settings",
			calldata: [gameId],
		};
	};

	const config_systems_gameSettings = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_config_systems_gameSettings_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_settingDetails_calldata = (settingsId: BigNumberish): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "setting_details",
			calldata: [settingsId],
		};
	};

	const config_systems_settingDetails = async (settingsId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_config_systems_settingDetails_calldata(settingsId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_config_systems_settingsExists_calldata = (settingsId: BigNumberish): DojoCall => {
		return {
			contractName: "config_systems",
			entrypoint: "settings_exists",
			calldata: [settingsId],
		};
	};

	const config_systems_settingsExists = async (settingsId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_config_systems_settingsExists_calldata(settingsId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_actionCount_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "action_count",
			calldata: [gameId],
		};
	};

	const game_systems_actionCount = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_actionCount_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_approve_calldata = (to: string, tokenId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "approve",
			calldata: [to, tokenId],
		};
	};

	const game_systems_approve = async (snAccount: Account | AccountInterface, to: string, tokenId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_approve_calldata(to, tokenId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_balanceOf_calldata = (account: string): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "balanceOf",
			calldata: [account],
		};
	};

	const game_systems_balanceOf = async (account: string) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_balanceOf_calldata(account));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_cards_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "cards",
			calldata: [gameId],
		};
	};

	const game_systems_cards = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_cards_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_emitMetadataUpdate_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "emit_metadata_update",
			calldata: [gameId],
		};
	};

	const game_systems_emitMetadataUpdate = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_emitMetadataUpdate_calldata(gameId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_gameCount_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "game_count",
			calldata: [],
		};
	};

	const game_systems_gameCount = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_gameCount_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_gameMetadata_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "game_metadata",
			calldata: [],
		};
	};

	const game_systems_gameMetadata = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_gameMetadata_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_gameState_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "game_state",
			calldata: [gameId],
		};
	};

	const game_systems_gameState = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_gameState_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_generateTree_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "generate_tree",
			calldata: [gameId],
		};
	};

	const game_systems_generateTree = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_generateTree_calldata(gameId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_getApproved_calldata = (tokenId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "getApproved",
			calldata: [tokenId],
		};
	};

	const game_systems_getApproved = async (tokenId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_getApproved_calldata(tokenId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_health_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "health",
			calldata: [gameId],
		};
	};

	const game_systems_health = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_health_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_isApprovedForAll_calldata = (owner: string, operator: string): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "isApprovedForAll",
			calldata: [owner, operator],
		};
	};

	const game_systems_isApprovedForAll = async (owner: string, operator: string) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_isApprovedForAll_calldata(owner, operator));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_lastNodeId_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "last_node_id",
			calldata: [gameId],
		};
	};

	const game_systems_lastNodeId = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_lastNodeId_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_level_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "level",
			calldata: [gameId],
		};
	};

	const game_systems_level = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_level_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_mapDepth_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "map_depth",
			calldata: [gameId],
		};
	};

	const game_systems_mapDepth = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_mapDepth_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_mint_calldata = (playerName: BigNumberish, settingsId: BigNumberish, start: CairoOption<BigNumberish>, end: CairoOption<BigNumberish>, to: string): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "mint",
			calldata: [playerName, settingsId, start, end, to],
		};
	};

	const game_systems_mint = async (snAccount: Account | AccountInterface, playerName: BigNumberish, settingsId: BigNumberish, start: CairoOption<BigNumberish>, end: CairoOption<BigNumberish>, to: string) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_mint_calldata(playerName, settingsId, start, end, to),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_monstersSlain_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "monsters_slain",
			calldata: [gameId],
		};
	};

	const game_systems_monstersSlain = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_monstersSlain_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_name_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "name",
			calldata: [],
		};
	};

	const game_systems_name = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_name_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_ownerOf_calldata = (tokenId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "ownerOf",
			calldata: [tokenId],
		};
	};

	const game_systems_ownerOf = async (tokenId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_ownerOf_calldata(tokenId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_pickCard_calldata = (gameId: BigNumberish, optionId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "pick_card",
			calldata: [gameId, optionId],
		};
	};

	const game_systems_pickCard = async (snAccount: Account | AccountInterface, gameId: BigNumberish, optionId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_pickCard_calldata(gameId, optionId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_playerName_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "player_name",
			calldata: [gameId],
		};
	};

	const game_systems_playerName = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_playerName_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_safeTransferFrom_calldata = (from: string, to: string, tokenId: BigNumberish, data: Array<BigNumberish>): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "safeTransferFrom",
			calldata: [from, to, tokenId, data],
		};
	};

	const game_systems_safeTransferFrom = async (snAccount: Account | AccountInterface, from: string, to: string, tokenId: BigNumberish, data: Array<BigNumberish>) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_safeTransferFrom_calldata(from, to, tokenId, data),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_score_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "score",
			calldata: [gameId],
		};
	};

	const game_systems_score = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_score_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_scoreAttribute_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "score_attribute",
			calldata: [],
		};
	};

	const game_systems_scoreAttribute = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_scoreAttribute_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_scoreModel_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "score_model",
			calldata: [],
		};
	};

	const game_systems_scoreModel = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_scoreModel_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_selectNode_calldata = (gameId: BigNumberish, nodeId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "select_node",
			calldata: [gameId, nodeId],
		};
	};

	const game_systems_selectNode = async (snAccount: Account | AccountInterface, gameId: BigNumberish, nodeId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_selectNode_calldata(gameId, nodeId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_setApprovalForAll_calldata = (operator: string, approved: boolean): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "setApprovalForAll",
			calldata: [operator, approved],
		};
	};

	const game_systems_setApprovalForAll = async (snAccount: Account | AccountInterface, operator: string, approved: boolean) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_setApprovalForAll_calldata(operator, approved),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_settingExists_calldata = (settingsId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "setting_exists",
			calldata: [settingsId],
		};
	};

	const game_systems_settingExists = async (settingsId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_settingExists_calldata(settingsId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_settingsModel_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "settings_model",
			calldata: [],
		};
	};

	const game_systems_settingsModel = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_settingsModel_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_startGame_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "start_game",
			calldata: [gameId],
		};
	};

	const game_systems_startGame = async (snAccount: Account | AccountInterface, gameId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_startGame_calldata(gameId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_supportsInterface_calldata = (interfaceId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "supports_interface",
			calldata: [interfaceId],
		};
	};

	const game_systems_supportsInterface = async (interfaceId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_supportsInterface_calldata(interfaceId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_symbol_calldata = (): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "symbol",
			calldata: [],
		};
	};

	const game_systems_symbol = async () => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_symbol_calldata());
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_tokenMetadata_calldata = (tokenId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "token_metadata",
			calldata: [tokenId],
		};
	};

	const game_systems_tokenMetadata = async (tokenId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_tokenMetadata_calldata(tokenId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_tokenUri_calldata = (tokenId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "token_uri",
			calldata: [tokenId],
		};
	};

	const game_systems_tokenUri = async (tokenId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_tokenUri_calldata(tokenId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_transferFrom_calldata = (from: string, to: string, tokenId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "transferFrom",
			calldata: [from, to, tokenId],
		};
	};

	const game_systems_transferFrom = async (snAccount: Account | AccountInterface, from: string, to: string, tokenId: BigNumberish) => {
		try {
			return await provider.execute(
				snAccount,
				build_game_systems_transferFrom_calldata(from, to, tokenId),
				"darkshuffle_s1",
			);
		} catch (error) {
			console.error(error);
			throw error;
		}
	};

	const build_game_systems_xp_calldata = (gameId: BigNumberish): DojoCall => {
		return {
			contractName: "game_systems",
			entrypoint: "xp",
			calldata: [gameId],
		};
	};

	const game_systems_xp = async (gameId: BigNumberish) => {
		try {
			return await provider.call("darkshuffle_s1", build_game_systems_xp_calldata(gameId));
		} catch (error) {
			console.error(error);
			throw error;
		}
	};



	return {
		battle_systems: {
			battleActions: battle_systems_battleActions,
			buildBattleActionsCalldata: build_battle_systems_battleActions_calldata,
		},
		config_systems: {
			addCreatureCard: config_systems_addCreatureCard,
			buildAddCreatureCardCalldata: build_config_systems_addCreatureCard_calldata,
			addRandomSettings: config_systems_addRandomSettings,
			buildAddRandomSettingsCalldata: build_config_systems_addRandomSettings_calldata,
			addSettings: config_systems_addSettings,
			buildAddSettingsCalldata: build_config_systems_addSettings_calldata,
			addSpellCard: config_systems_addSpellCard,
			buildAddSpellCardCalldata: build_config_systems_addSpellCard_calldata,
			gameSettings: config_systems_gameSettings,
			buildGameSettingsCalldata: build_config_systems_gameSettings_calldata,
			settingDetails: config_systems_settingDetails,
			buildSettingDetailsCalldata: build_config_systems_settingDetails_calldata,
			settingsExists: config_systems_settingsExists,
			buildSettingsExistsCalldata: build_config_systems_settingsExists_calldata,
		},
		game_systems: {
			actionCount: game_systems_actionCount,
			buildActionCountCalldata: build_game_systems_actionCount_calldata,
			approve: game_systems_approve,
			buildApproveCalldata: build_game_systems_approve_calldata,
			balanceOf: game_systems_balanceOf,
			buildBalanceOfCalldata: build_game_systems_balanceOf_calldata,
			cards: game_systems_cards,
			buildCardsCalldata: build_game_systems_cards_calldata,
			emitMetadataUpdate: game_systems_emitMetadataUpdate,
			buildEmitMetadataUpdateCalldata: build_game_systems_emitMetadataUpdate_calldata,
			gameCount: game_systems_gameCount,
			buildGameCountCalldata: build_game_systems_gameCount_calldata,
			gameMetadata: game_systems_gameMetadata,
			buildGameMetadataCalldata: build_game_systems_gameMetadata_calldata,
			gameState: game_systems_gameState,
			buildGameStateCalldata: build_game_systems_gameState_calldata,
			generateTree: game_systems_generateTree,
			buildGenerateTreeCalldata: build_game_systems_generateTree_calldata,
			getApproved: game_systems_getApproved,
			buildGetApprovedCalldata: build_game_systems_getApproved_calldata,
			health: game_systems_health,
			buildHealthCalldata: build_game_systems_health_calldata,
			isApprovedForAll: game_systems_isApprovedForAll,
			buildIsApprovedForAllCalldata: build_game_systems_isApprovedForAll_calldata,
			lastNodeId: game_systems_lastNodeId,
			buildLastNodeIdCalldata: build_game_systems_lastNodeId_calldata,
			level: game_systems_level,
			buildLevelCalldata: build_game_systems_level_calldata,
			mapDepth: game_systems_mapDepth,
			buildMapDepthCalldata: build_game_systems_mapDepth_calldata,
			mint: game_systems_mint,
			buildMintCalldata: build_game_systems_mint_calldata,
			monstersSlain: game_systems_monstersSlain,
			buildMonstersSlainCalldata: build_game_systems_monstersSlain_calldata,
			name: game_systems_name,
			buildNameCalldata: build_game_systems_name_calldata,
			ownerOf: game_systems_ownerOf,
			buildOwnerOfCalldata: build_game_systems_ownerOf_calldata,
			pickCard: game_systems_pickCard,
			buildPickCardCalldata: build_game_systems_pickCard_calldata,
			playerName: game_systems_playerName,
			buildPlayerNameCalldata: build_game_systems_playerName_calldata,
			safeTransferFrom: game_systems_safeTransferFrom,
			buildSafeTransferFromCalldata: build_game_systems_safeTransferFrom_calldata,
			score: game_systems_score,
			buildScoreCalldata: build_game_systems_score_calldata,
			scoreAttribute: game_systems_scoreAttribute,
			buildScoreAttributeCalldata: build_game_systems_scoreAttribute_calldata,
			scoreModel: game_systems_scoreModel,
			buildScoreModelCalldata: build_game_systems_scoreModel_calldata,
			selectNode: game_systems_selectNode,
			buildSelectNodeCalldata: build_game_systems_selectNode_calldata,
			setApprovalForAll: game_systems_setApprovalForAll,
			buildSetApprovalForAllCalldata: build_game_systems_setApprovalForAll_calldata,
			settingExists: game_systems_settingExists,
			buildSettingExistsCalldata: build_game_systems_settingExists_calldata,
			settingsModel: game_systems_settingsModel,
			buildSettingsModelCalldata: build_game_systems_settingsModel_calldata,
			startGame: game_systems_startGame,
			buildStartGameCalldata: build_game_systems_startGame_calldata,
			supportsInterface: game_systems_supportsInterface,
			buildSupportsInterfaceCalldata: build_game_systems_supportsInterface_calldata,
			symbol: game_systems_symbol,
			buildSymbolCalldata: build_game_systems_symbol_calldata,
			tokenMetadata: game_systems_tokenMetadata,
			buildTokenMetadataCalldata: build_game_systems_tokenMetadata_calldata,
			tokenUri: game_systems_tokenUri,
			buildTokenUriCalldata: build_game_systems_tokenUri_calldata,
			transferFrom: game_systems_transferFrom,
			buildTransferFromCalldata: build_game_systems_transferFrom_calldata,
			xp: game_systems_xp,
			buildXpCalldata: build_game_systems_xp_calldata,
		},
	};
}