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

export interface Pokemon {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}
