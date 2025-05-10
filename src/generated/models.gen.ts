import type { SchemaType as ISchemaType } from "@dojoengine/sdk";

import { CairoOption, CairoOptionVariant, BigNumberish } from 'starknet';

// Type definition for `darkshuffle::models::battle::Battle` struct
export interface Battle {
	battle_id: BigNumberish;
	game_id: BigNumberish;
	round: BigNumberish;
	hero: Hero;
	monster: Monster;
	battle_effects: BattleEffects;
}

// Type definition for `darkshuffle::models::battle::BattleEffects` struct
export interface BattleEffects {
	enemy_marks: BigNumberish;
	hero_dmg_reduction: BigNumberish;
	next_hunter_attack_bonus: BigNumberish;
	next_hunter_health_bonus: BigNumberish;
	next_brute_attack_bonus: BigNumberish;
	next_brute_health_bonus: BigNumberish;
	next_magical_attack_bonus: BigNumberish;
	next_magical_health_bonus: BigNumberish;
}

// Type definition for `darkshuffle::models::battle::BattleResources` struct
export interface BattleResources {
	battle_id: BigNumberish;
	game_id: BigNumberish;
	hand: Array<BigNumberish>;
	deck: Array<BigNumberish>;
	board: Array<Creature>;
}

// Type definition for `darkshuffle::models::battle::BattleResourcesValue` struct
export interface BattleResourcesValue {
	hand: Array<BigNumberish>;
	deck: Array<BigNumberish>;
	board: Array<Creature>;
}

// Type definition for `darkshuffle::models::battle::BattleValue` struct
export interface BattleValue {
	round: BigNumberish;
	hero: Hero;
	monster: Monster;
	battle_effects: BattleEffects;
}

// Type definition for `darkshuffle::models::battle::Creature` struct
export interface Creature {
	card_index: BigNumberish;
	attack: BigNumberish;
	health: BigNumberish;
}

// Type definition for `darkshuffle::models::battle::Hero` struct
export interface Hero {
	health: BigNumberish;
	energy: BigNumberish;
}

// Type definition for `darkshuffle::models::battle::Monster` struct
export interface Monster {
	monster_id: BigNumberish;
	attack: BigNumberish;
	health: BigNumberish;
}

// Type definition for `darkshuffle::models::card::Card` struct
export interface Card {
	id: BigNumberish;
	name: BigNumberish;
	rarity: BigNumberish;
	cost: BigNumberish;
	category: BigNumberish;
}

// Type definition for `darkshuffle::models::card::CardEffect` struct
export interface CardEffect {
	modifier: CardModifier;
	bonus: EffectBonus;
}

// Type definition for `darkshuffle::models::card::CardModifier` struct
export interface CardModifier {
	_type: BigNumberish;
	value_type: BigNumberish;
	value: BigNumberish;
	requirement: BigNumberish;
}

// Type definition for `darkshuffle::models::card::CardValue` struct
export interface CardValue {
	name: BigNumberish;
	rarity: BigNumberish;
	cost: BigNumberish;
	category: BigNumberish;
}

// Type definition for `darkshuffle::models::card::CreatureCard` struct
export interface CreatureCard {
	id: BigNumberish;
	attack: BigNumberish;
	health: BigNumberish;
	card_type: BigNumberish;
	play_effect: CardEffect;
	death_effect: CardEffect;
	attack_effect: CardEffect;
}

// Type definition for `darkshuffle::models::card::CreatureCardValue` struct
export interface CreatureCardValue {
	attack: BigNumberish;
	health: BigNumberish;
	card_type: BigNumberish;
	play_effect: CardEffect;
	death_effect: CardEffect;
	attack_effect: CardEffect;
}

// Type definition for `darkshuffle::models::card::EffectBonus` struct
export interface EffectBonus {
	value: BigNumberish;
	requirement: BigNumberish;
}

// Type definition for `darkshuffle::models::card::SpellCard` struct
export interface SpellCard {
	id: BigNumberish;
	card_type: BigNumberish;
	effect: CardEffect;
	extra_effect: CardEffect;
}

// Type definition for `darkshuffle::models::card::SpellCardValue` struct
export interface SpellCardValue {
	card_type: BigNumberish;
	effect: CardEffect;
	extra_effect: CardEffect;
}

// Type definition for `darkshuffle::models::config::BattleSettings` struct
export interface BattleSettings {
	start_energy: BigNumberish;
	start_hand_size: BigNumberish;
	max_energy: BigNumberish;
	max_hand_size: BigNumberish;
	draw_amount: BigNumberish;
}

// Type definition for `darkshuffle::models::config::CardRarityWeights` struct
export interface CardRarityWeights {
	common: BigNumberish;
	uncommon: BigNumberish;
	rare: BigNumberish;
	epic: BigNumberish;
	legendary: BigNumberish;
}

// Type definition for `darkshuffle::models::config::CardsCounter` struct
export interface CardsCounter {
	id: BigNumberish;
	count: BigNumberish;
}

// Type definition for `darkshuffle::models::config::CardsCounterValue` struct
export interface CardsCounterValue {
	count: BigNumberish;
}

// Type definition for `darkshuffle::models::config::DraftSettings` struct
export interface DraftSettings {
	draft_size: BigNumberish;
	card_ids: Array<BigNumberish>;
	card_rarity_weights: CardRarityWeights;
	auto_draft: boolean;
}

// Type definition for `darkshuffle::models::config::GameSettings` struct
export interface GameSettings {
	settings_id: BigNumberish;
	starting_health: BigNumberish;
	persistent_health: boolean;
	map: MapSettings;
	battle: BattleSettings;
	draft: DraftSettings;
}

// Type definition for `darkshuffle::models::config::GameSettingsMetadata` struct
export interface GameSettingsMetadata {
	settings_id: BigNumberish;
	name: BigNumberish;
	description: string;
	created_by: string;
	created_at: BigNumberish;
}

// Type definition for `darkshuffle::models::config::GameSettingsMetadataValue` struct
export interface GameSettingsMetadataValue {
	name: BigNumberish;
	description: string;
	created_by: string;
	created_at: BigNumberish;
}

// Type definition for `darkshuffle::models::config::GameSettingsValue` struct
export interface GameSettingsValue {
	starting_health: BigNumberish;
	persistent_health: boolean;
	map: MapSettings;
	battle: BattleSettings;
	draft: DraftSettings;
}

// Type definition for `darkshuffle::models::config::MapSettings` struct
export interface MapSettings {
	level_depth: BigNumberish;
	possible_branches: BigNumberish;
	enemy_attack_min: BigNumberish;
	enemy_attack_max: BigNumberish;
	enemy_health_min: BigNumberish;
	enemy_health_max: BigNumberish;
	enemy_attack_scaling: BigNumberish;
	enemy_health_scaling: BigNumberish;
}

// Type definition for `darkshuffle::models::draft::Draft` struct
export interface Draft {
	game_id: BigNumberish;
	options: Array<BigNumberish>;
	cards: Array<BigNumberish>;
}

// Type definition for `darkshuffle::models::draft::DraftValue` struct
export interface DraftValue {
	options: Array<BigNumberish>;
	cards: Array<BigNumberish>;
}

// Type definition for `darkshuffle::models::game::Game` struct
export interface Game {
	game_id: BigNumberish;
	hero_health: BigNumberish;
	hero_xp: BigNumberish;
	monsters_slain: BigNumberish;
	map_level: BigNumberish;
	map_depth: BigNumberish;
	last_node_id: BigNumberish;
	action_count: BigNumberish;
	state: BigNumberish;
}

// Type definition for `darkshuffle::models::game::GameEffects` struct
export interface GameEffects {
	game_id: BigNumberish;
	first_attack: BigNumberish;
	first_health: BigNumberish;
	all_attack: BigNumberish;
	hunter_attack: BigNumberish;
	hunter_health: BigNumberish;
	magical_attack: BigNumberish;
	magical_health: BigNumberish;
	brute_attack: BigNumberish;
	brute_health: BigNumberish;
	hero_dmg_reduction: BigNumberish;
	hero_card_heal: boolean;
	card_draw: BigNumberish;
	play_creature_heal: BigNumberish;
	start_bonus_energy: BigNumberish;
}

// Type definition for `darkshuffle::models::game::GameEffectsValue` struct
export interface GameEffectsValue {
	first_attack: BigNumberish;
	first_health: BigNumberish;
	all_attack: BigNumberish;
	hunter_attack: BigNumberish;
	hunter_health: BigNumberish;
	magical_attack: BigNumberish;
	magical_health: BigNumberish;
	brute_attack: BigNumberish;
	brute_health: BigNumberish;
	hero_dmg_reduction: BigNumberish;
	hero_card_heal: boolean;
	card_draw: BigNumberish;
	play_creature_heal: BigNumberish;
	start_bonus_energy: BigNumberish;
}

// Type definition for `darkshuffle::models::game::GameValue` struct
export interface GameValue {
	hero_health: BigNumberish;
	hero_xp: BigNumberish;
	monsters_slain: BigNumberish;
	map_level: BigNumberish;
	map_depth: BigNumberish;
	last_node_id: BigNumberish;
	action_count: BigNumberish;
	state: BigNumberish;
}

// Type definition for `darkshuffle::models::map::Map` struct
export interface Map {
	game_id: BigNumberish;
	level: BigNumberish;
	seed: BigNumberish;
}

// Type definition for `darkshuffle::models::map::MapValue` struct
export interface MapValue {
	seed: BigNumberish;
}

// Type definition for `tournaments::components::models::game::GameCounter` struct
export interface GameCounter {
	key: BigNumberish;
	count: BigNumberish;
}

// Type definition for `tournaments::components::models::game::GameCounterValue` struct
export interface GameCounterValue {
	count: BigNumberish;
}

// Type definition for `tournaments::components::models::game::GameMetadata` struct
export interface GameMetadata {
	contract_address: string;
	creator_address: string;
	name: BigNumberish;
	description: string;
	developer: BigNumberish;
	publisher: BigNumberish;
	genre: BigNumberish;
	image: string;
}

// Type definition for `tournaments::components::models::game::GameMetadataValue` struct
export interface GameMetadataValue {
	creator_address: string;
	name: BigNumberish;
	description: string;
	developer: BigNumberish;
	publisher: BigNumberish;
	genre: BigNumberish;
	image: string;
}

// Type definition for `tournaments::components::models::game::Score` struct
export interface Score {
	game_id: BigNumberish;
	score: BigNumberish;
}

// Type definition for `tournaments::components::models::game::ScoreValue` struct
export interface ScoreValue {
	score: BigNumberish;
}

// Type definition for `tournaments::components::models::game::Settings` struct
export interface Settings {
	id: BigNumberish;
	name: BigNumberish;
	value: BigNumberish;
}

// Type definition for `tournaments::components::models::game::SettingsCounter` struct
export interface SettingsCounter {
	key: BigNumberish;
	count: BigNumberish;
}

// Type definition for `tournaments::components::models::game::SettingsCounterValue` struct
export interface SettingsCounterValue {
	count: BigNumberish;
}

// Type definition for `tournaments::components::models::game::SettingsDetails` struct
export interface SettingsDetails {
	id: BigNumberish;
	name: BigNumberish;
	description: string;
	exists: boolean;
}

// Type definition for `tournaments::components::models::game::SettingsDetailsValue` struct
export interface SettingsDetailsValue {
	name: BigNumberish;
	description: string;
	exists: boolean;
}

// Type definition for `tournaments::components::models::game::SettingsValue` struct
export interface SettingsValue {
	value: BigNumberish;
}

// Type definition for `tournaments::components::models::game::TokenMetadata` struct
export interface TokenMetadata {
	token_id: BigNumberish;
	minted_by: string;
	player_name: BigNumberish;
	settings_id: BigNumberish;
	lifecycle: Lifecycle;
}

// Type definition for `tournaments::components::models::game::TokenMetadataValue` struct
export interface TokenMetadataValue {
	minted_by: string;
	player_name: BigNumberish;
	settings_id: BigNumberish;
	lifecycle: Lifecycle;
}

// Type definition for `tournaments::components::models::lifecycle::Lifecycle` struct
export interface Lifecycle {
	mint: BigNumberish;
	start: CairoOption<BigNumberish>;
	end: CairoOption<BigNumberish>;
}

// Type definition for `achievement::events::index::TrophyCreation` struct
export interface TrophyCreation {
	id: BigNumberish;
	hidden: boolean;
	index: BigNumberish;
	points: BigNumberish;
	start: BigNumberish;
	end: BigNumberish;
	group: BigNumberish;
	icon: BigNumberish;
	title: BigNumberish;
	description: string;
	tasks: Array<Task>;
	data: string;
}

// Type definition for `achievement::events::index::TrophyCreationValue` struct
export interface TrophyCreationValue {
	hidden: boolean;
	index: BigNumberish;
	points: BigNumberish;
	start: BigNumberish;
	end: BigNumberish;
	group: BigNumberish;
	icon: BigNumberish;
	title: BigNumberish;
	description: string;
	tasks: Array<Task>;
	data: string;
}

// Type definition for `achievement::events::index::TrophyProgression` struct
export interface TrophyProgression {
	player_id: BigNumberish;
	task_id: BigNumberish;
	count: BigNumberish;
	time: BigNumberish;
}

// Type definition for `achievement::events::index::TrophyProgressionValue` struct
export interface TrophyProgressionValue {
	count: BigNumberish;
	time: BigNumberish;
}

// Type definition for `achievement::types::index::Task` struct
export interface Task {
	id: BigNumberish;
	total: BigNumberish;
	description: string;
}

// Type definition for `darkshuffle::models::game::GameActionEvent` struct
export interface GameActionEvent {
	tx_hash: BigNumberish;
	game_id: BigNumberish;
	count: BigNumberish;
}

// Type definition for `darkshuffle::models::game::GameActionEventValue` struct
export interface GameActionEventValue {
	game_id: BigNumberish;
	count: BigNumberish;
}

export interface SchemaType extends ISchemaType {
	darkshuffle: {
		Battle: Battle,
		BattleEffects: BattleEffects,
		BattleResources: BattleResources,
		BattleResourcesValue: BattleResourcesValue,
		BattleValue: BattleValue,
		Creature: Creature,
		Hero: Hero,
		Monster: Monster,
		Card: Card,
		CardEffect: CardEffect,
		CardModifier: CardModifier,
		CardValue: CardValue,
		CreatureCard: CreatureCard,
		CreatureCardValue: CreatureCardValue,
		EffectBonus: EffectBonus,
		SpellCard: SpellCard,
		SpellCardValue: SpellCardValue,
		BattleSettings: BattleSettings,
		CardRarityWeights: CardRarityWeights,
		CardsCounter: CardsCounter,
		CardsCounterValue: CardsCounterValue,
		DraftSettings: DraftSettings,
		GameSettings: GameSettings,
		GameSettingsMetadata: GameSettingsMetadata,
		GameSettingsMetadataValue: GameSettingsMetadataValue,
		GameSettingsValue: GameSettingsValue,
		MapSettings: MapSettings,
		Draft: Draft,
		DraftValue: DraftValue,
		Game: Game,
		GameEffects: GameEffects,
		GameEffectsValue: GameEffectsValue,
		GameValue: GameValue,
		Map: Map,
		MapValue: MapValue,
	},
	tournaments: {
		GameCounter: GameCounter,
		GameCounterValue: GameCounterValue,
		GameMetadata: GameMetadata,
		GameMetadataValue: GameMetadataValue,
		Score: Score,
		ScoreValue: ScoreValue,
		Settings: Settings,
		SettingsCounter: SettingsCounter,
		SettingsCounterValue: SettingsCounterValue,
		SettingsDetails: SettingsDetails,
		SettingsDetailsValue: SettingsDetailsValue,
		SettingsValue: SettingsValue,
		TokenMetadata: TokenMetadata,
		TokenMetadataValue: TokenMetadataValue,
		Lifecycle: Lifecycle,
	},
	achievement: {
		TrophyCreation: TrophyCreation,
		TrophyCreationValue: TrophyCreationValue,
		TrophyProgression: TrophyProgression,
		TrophyProgressionValue: TrophyProgressionValue,
		Task: Task,
		GameActionEvent: GameActionEvent,
		GameActionEventValue: GameActionEventValue,
	},
}
export const schema: SchemaType = {
	darkshuffle: {
		Battle: {
			battle_id: 0,
			game_id: 0,
			round: 0,
		hero: { health: 0, energy: 0, },
		monster: { monster_id: 0, attack: 0, health: 0, },
		battle_effects: { enemy_marks: 0, hero_dmg_reduction: 0, next_hunter_attack_bonus: 0, next_hunter_health_bonus: 0, next_brute_attack_bonus: 0, next_brute_health_bonus: 0, next_magical_attack_bonus: 0, next_magical_health_bonus: 0, },
		},
		BattleEffects: {
			enemy_marks: 0,
			hero_dmg_reduction: 0,
			next_hunter_attack_bonus: 0,
			next_hunter_health_bonus: 0,
			next_brute_attack_bonus: 0,
			next_brute_health_bonus: 0,
			next_magical_attack_bonus: 0,
			next_magical_health_bonus: 0,
		},
		BattleResources: {
			battle_id: 0,
			game_id: 0,
			hand: [0],
			deck: [0],
			board: [{ card_index: 0, attack: 0, health: 0, }],
		},
		BattleResourcesValue: {
			hand: [0],
			deck: [0],
			board: [{ card_index: 0, attack: 0, health: 0, }],
		},
		BattleValue: {
			round: 0,
		hero: { health: 0, energy: 0, },
		monster: { monster_id: 0, attack: 0, health: 0, },
		battle_effects: { enemy_marks: 0, hero_dmg_reduction: 0, next_hunter_attack_bonus: 0, next_hunter_health_bonus: 0, next_brute_attack_bonus: 0, next_brute_health_bonus: 0, next_magical_attack_bonus: 0, next_magical_health_bonus: 0, },
		},
		Creature: {
			card_index: 0,
			attack: 0,
			health: 0,
		},
		Hero: {
			health: 0,
			energy: 0,
		},
		Monster: {
			monster_id: 0,
			attack: 0,
			health: 0,
		},
		Card: {
			id: 0,
			name: 0,
			rarity: 0,
			cost: 0,
			category: 0,
		},
		CardEffect: {
		modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, },
		bonus: { value: 0, requirement: 0, },
		},
		CardModifier: {
			_type: 0,
			value_type: 0,
			value: 0,
			requirement: 0,
		},
		CardValue: {
			name: 0,
			rarity: 0,
			cost: 0,
			category: 0,
		},
		CreatureCard: {
			id: 0,
			attack: 0,
			health: 0,
			card_type: 0,
		play_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		death_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		attack_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		},
		CreatureCardValue: {
			attack: 0,
			health: 0,
			card_type: 0,
		play_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		death_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		attack_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		},
		EffectBonus: {
			value: 0,
			requirement: 0,
		},
		SpellCard: {
			id: 0,
			card_type: 0,
		effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		extra_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		},
		SpellCardValue: {
			card_type: 0,
		effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		extra_effect: { modifier: { _type: 0, value_type: 0, value: 0, requirement: 0, }, bonus: { value: 0, requirement: 0, }, },
		},
		BattleSettings: {
			start_energy: 0,
			start_hand_size: 0,
			max_energy: 0,
			max_hand_size: 0,
			draw_amount: 0,
		},
		CardRarityWeights: {
			common: 0,
			uncommon: 0,
			rare: 0,
			epic: 0,
			legendary: 0,
		},
		CardsCounter: {
			id: 0,
			count: 0,
		},
		CardsCounterValue: {
			count: 0,
		},
		DraftSettings: {
			draft_size: 0,
			card_ids: [0],
		card_rarity_weights: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 0, },
			auto_draft: false,
		},
		GameSettings: {
			settings_id: 0,
			starting_health: 0,
			persistent_health: false,
		map: { level_depth: 0, possible_branches: 0, enemy_attack_min: 0, enemy_attack_max: 0, enemy_health_min: 0, enemy_health_max: 0, enemy_attack_scaling: 0, enemy_health_scaling: 0, },
		battle: { start_energy: 0, start_hand_size: 0, max_energy: 0, max_hand_size: 0, draw_amount: 0, },
		draft: { draft_size: 0, card_ids: [0], card_rarity_weights: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 0, }, auto_draft: false, },
		},
		GameSettingsMetadata: {
			settings_id: 0,
			name: 0,
		description: "",
			created_by: "",
			created_at: 0,
		},
		GameSettingsMetadataValue: {
			name: 0,
		description: "",
			created_by: "",
			created_at: 0,
		},
		GameSettingsValue: {
			starting_health: 0,
			persistent_health: false,
		map: { level_depth: 0, possible_branches: 0, enemy_attack_min: 0, enemy_attack_max: 0, enemy_health_min: 0, enemy_health_max: 0, enemy_attack_scaling: 0, enemy_health_scaling: 0, },
		battle: { start_energy: 0, start_hand_size: 0, max_energy: 0, max_hand_size: 0, draw_amount: 0, },
		draft: { draft_size: 0, card_ids: [0], card_rarity_weights: { common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 0, }, auto_draft: false, },
		},
		MapSettings: {
			level_depth: 0,
			possible_branches: 0,
			enemy_attack_min: 0,
			enemy_attack_max: 0,
			enemy_health_min: 0,
			enemy_health_max: 0,
			enemy_attack_scaling: 0,
			enemy_health_scaling: 0,
		},
		Draft: {
			game_id: 0,
			options: [0],
			cards: [0],
		},
		DraftValue: {
			options: [0],
			cards: [0],
		},
		Game: {
			game_id: 0,
			hero_health: 0,
			hero_xp: 0,
			monsters_slain: 0,
			map_level: 0,
			map_depth: 0,
			last_node_id: 0,
			action_count: 0,
			state: 0,
		},
		GameEffects: {
			game_id: 0,
			first_attack: 0,
			first_health: 0,
			all_attack: 0,
			hunter_attack: 0,
			hunter_health: 0,
			magical_attack: 0,
			magical_health: 0,
			brute_attack: 0,
			brute_health: 0,
			hero_dmg_reduction: 0,
			hero_card_heal: false,
			card_draw: 0,
			play_creature_heal: 0,
			start_bonus_energy: 0,
		},
		GameEffectsValue: {
			first_attack: 0,
			first_health: 0,
			all_attack: 0,
			hunter_attack: 0,
			hunter_health: 0,
			magical_attack: 0,
			magical_health: 0,
			brute_attack: 0,
			brute_health: 0,
			hero_dmg_reduction: 0,
			hero_card_heal: false,
			card_draw: 0,
			play_creature_heal: 0,
			start_bonus_energy: 0,
		},
		GameValue: {
			hero_health: 0,
			hero_xp: 0,
			monsters_slain: 0,
			map_level: 0,
			map_depth: 0,
			last_node_id: 0,
			action_count: 0,
			state: 0,
		},
		Map: {
			game_id: 0,
			level: 0,
			seed: 0,
		},
		MapValue: {
			seed: 0,
		},
		GameCounter: {
			key: 0,
			count: 0,
		},
		GameCounterValue: {
			count: 0,
		},
		GameMetadata: {
			contract_address: "",
			creator_address: "",
			name: 0,
		description: "",
			developer: 0,
			publisher: 0,
			genre: 0,
		image: "",
		},
		GameMetadataValue: {
			creator_address: "",
			name: 0,
		description: "",
			developer: 0,
			publisher: 0,
			genre: 0,
		image: "",
		},
		Score: {
			game_id: 0,
			score: 0,
		},
		ScoreValue: {
			score: 0,
		},
		Settings: {
			id: 0,
			name: 0,
			value: 0,
		},
		SettingsCounter: {
			key: 0,
			count: 0,
		},
		SettingsCounterValue: {
			count: 0,
		},
		SettingsDetails: {
			id: 0,
			name: 0,
		description: "",
			exists: false,
		},
		SettingsDetailsValue: {
			name: 0,
		description: "",
			exists: false,
		},
		SettingsValue: {
			value: 0,
		},
		TokenMetadata: {
			token_id: 0,
			minted_by: "",
			player_name: 0,
			settings_id: 0,
		lifecycle: { mint: 0, start: new CairoOption(CairoOptionVariant.None), end: new CairoOption(CairoOptionVariant.None), },
		},
		TokenMetadataValue: {
			minted_by: "",
			player_name: 0,
			settings_id: 0,
		lifecycle: { mint: 0, start: new CairoOption(CairoOptionVariant.None), end: new CairoOption(CairoOptionVariant.None), },
		},
		Lifecycle: {
			mint: 0,
		start: new CairoOption(CairoOptionVariant.None),
		end: new CairoOption(CairoOptionVariant.None),
		},
		TrophyCreation: {
			id: 0,
			hidden: false,
			index: 0,
			points: 0,
			start: 0,
			end: 0,
			group: 0,
			icon: 0,
			title: 0,
		description: "",
			tasks: [{ id: 0, total: 0, description: "", }],
		data: "",
		},
		TrophyCreationValue: {
			hidden: false,
			index: 0,
			points: 0,
			start: 0,
			end: 0,
			group: 0,
			icon: 0,
			title: 0,
		description: "",
			tasks: [{ id: 0, total: 0, description: "", }],
		data: "",
		},
		TrophyProgression: {
			player_id: 0,
			task_id: 0,
			count: 0,
			time: 0,
		},
		TrophyProgressionValue: {
			count: 0,
			time: 0,
		},
		Task: {
			id: 0,
			total: 0,
		description: "",
		},
		GameActionEvent: {
			tx_hash: 0,
			game_id: 0,
			count: 0,
		},
		GameActionEventValue: {
			game_id: 0,
			count: 0,
		},
	},
};
export enum ModelsMapping {
	Battle = 'darkshuffle-Battle',
	BattleEffects = 'darkshuffle-BattleEffects',
	BattleResources = 'darkshuffle-BattleResources',
	BattleResourcesValue = 'darkshuffle-BattleResourcesValue',
	BattleValue = 'darkshuffle-BattleValue',
	Creature = 'darkshuffle-Creature',
	Hero = 'darkshuffle-Hero',
	Monster = 'darkshuffle-Monster',
	Card = 'darkshuffle-Card',
	CardEffect = 'darkshuffle-CardEffect',
	CardModifier = 'darkshuffle-CardModifier',
	CardValue = 'darkshuffle-CardValue',
	CreatureCard = 'darkshuffle-CreatureCard',
	CreatureCardValue = 'darkshuffle-CreatureCardValue',
	EffectBonus = 'darkshuffle-EffectBonus',
	SpellCard = 'darkshuffle-SpellCard',
	SpellCardValue = 'darkshuffle-SpellCardValue',
	BattleSettings = 'darkshuffle-BattleSettings',
	CardRarityWeights = 'darkshuffle-CardRarityWeights',
	CardsCounter = 'darkshuffle-CardsCounter',
	CardsCounterValue = 'darkshuffle-CardsCounterValue',
	DraftSettings = 'darkshuffle-DraftSettings',
	GameSettings = 'darkshuffle-GameSettings',
	GameSettingsMetadata = 'darkshuffle-GameSettingsMetadata',
	GameSettingsMetadataValue = 'darkshuffle-GameSettingsMetadataValue',
	GameSettingsValue = 'darkshuffle-GameSettingsValue',
	MapSettings = 'darkshuffle-MapSettings',
	Draft = 'darkshuffle-Draft',
	DraftValue = 'darkshuffle-DraftValue',
	Game = 'darkshuffle-Game',
	GameEffects = 'darkshuffle-GameEffects',
	GameEffectsValue = 'darkshuffle-GameEffectsValue',
	GameValue = 'darkshuffle-GameValue',
	Map = 'darkshuffle-Map',
	MapValue = 'darkshuffle-MapValue',
	GameCounter = 'tournaments-GameCounter',
	GameCounterValue = 'tournaments-GameCounterValue',
	GameMetadata = 'tournaments-GameMetadata',
	GameMetadataValue = 'tournaments-GameMetadataValue',
	Score = 'tournaments-Score',
	ScoreValue = 'tournaments-ScoreValue',
	Settings = 'tournaments-Settings',
	SettingsCounter = 'tournaments-SettingsCounter',
	SettingsCounterValue = 'tournaments-SettingsCounterValue',
	SettingsDetails = 'tournaments-SettingsDetails',
	SettingsDetailsValue = 'tournaments-SettingsDetailsValue',
	SettingsValue = 'tournaments-SettingsValue',
	TokenMetadata = 'tournaments-TokenMetadata',
	TokenMetadataValue = 'tournaments-TokenMetadataValue',
	Lifecycle = 'tournaments-Lifecycle',
	TrophyCreation = 'achievement-TrophyCreation',
	TrophyCreationValue = 'achievement-TrophyCreationValue',
	TrophyProgression = 'achievement-TrophyProgression',
	TrophyProgressionValue = 'achievement-TrophyProgressionValue',
	Task = 'achievement-Task',
	GameActionEvent = 'darkshuffle-GameActionEvent',
	GameActionEventValue = 'darkshuffle-GameActionEventValue',
}