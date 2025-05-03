import { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
  onClick?: () => void;
}

const typeColors: Record<string, string> = {
  grass: "bg-green-500",
  poison: "bg-purple-500",
  fire: "bg-orange-400",
  water: "bg-blue-500",
  flying: "bg-sky-400",
  bug: "bg-lime-500",
  normal: "bg-gray-400",
  electric: "bg-yellow-400",
  ground: "bg-yellow-700",
  psychic: "bg-pink-400",
  ice: "bg-cyan-300",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-600",
  dragon: "bg-indigo-800",
  dark: "bg-zinc-800",
  steel: "bg-gray-500",
  fairy: "bg-pink-200",
};

export function PokemonCard({ pokemon, onClick }: Props) {
  const primaryType = pokemon.types[0]?.type.name;
  const cardColor = typeColors[primaryType] || "bg-gray-300";

  return (
    <div
      onClick={onClick}
      className={`rounded-xl p-4 text-white shadow-lg transition transform hover:scale-105 cursor-pointer ${cardColor}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold">#{pokemon.id}</span>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-35 h-35"
        />
      </div>
      <h2 className="text-lg font-bold mt-2 capitalize">{pokemon.name}</h2>
      <div className="flex gap-2 mt-2 flex-wrap">
        {pokemon.types.map(({ type }) => (
          <span
            key={type.name}
            className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full capitalize"
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
