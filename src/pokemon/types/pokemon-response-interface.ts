export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSprite {
  front_default: string;
  [key: string]: any;
}

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: any[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonResponse {
  id: number;
  name: string;
  moves: PokemonMove[];
  abilities: PokemonAbility[];
  sprites: PokemonSprite;
  types: PokemonType[];
  [key: string]: any;
}
