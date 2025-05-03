import { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
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

export function PokemonCard({ pokemon }: Props) {
  const primaryType = pokemon.types[0]?.type.name;
  const cardColor = typeColors[primaryType] || "bg-gray-300";

  return (
    <div
      className={`relative rounded-2xl p-4 text-white ${cardColor} shadow-xl overflow-hidden flex flex-col justify-between h-44`}
    >
      <div className="z-10 relative">
        <span className="text-sm font-bold">#{pokemon.id}</span>
        <h2 className="text-2xl font-bold mt-1 capitalize">{pokemon.name}</h2>
        <div className="flex gap-2 mt-2 flex-wrap">
          {pokemon.types.map(({ type }) => (
            <span
              key={type.name}
              className="bg-white text-black text-xs font-medium px-2 py-1 rounded-full capitalize"
            >
              {type.name}
            </span>
          ))}
        </div>
      </div>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="absolute right-[-10px] bottom-[-5px] w-28 h-28 opacity-60"
      />
    </div>
  );
}
