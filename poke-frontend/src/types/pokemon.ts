export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    order: number | null;
    version_group: NamedAPIResource;
  }[];
}

export interface PokemonCries {
  latest: string;
  legacy: string;
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny?: string;
  back_default?: string;
  other?: {
    "official-artwork"?: {
      front_default: string;
      front_shiny?: string;
    };
    home?: {
      front_default?: string;
      front_shiny?: string;
    };
    showdown?: {
      front_default?: string;
      front_shiny?: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  is_default: boolean;

  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
  moves: PokemonMove[];

  cries: PokemonCries;
  forms: PokemonForm[];

  sprites: PokemonSprites;

  species: NamedAPIResource;
  location_area_encounters: string;

  held_items: any[];
  game_indices: {
    game_index: number;
    version: NamedAPIResource;
  }[];

  past_abilities: {
    abilities: {
      ability: NamedAPIResource | null;
      is_hidden: boolean;
      slot: number;
    }[];
    generation: NamedAPIResource;
  }[];

  past_types: any[];
}
