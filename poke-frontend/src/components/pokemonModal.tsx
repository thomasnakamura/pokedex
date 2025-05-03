import { Pokemon } from "../types/pokemon";

interface Props {
  pokemon: Pokemon;
  onClose: () => void;
}

const typeColors: Record<string, string> = {
  grass: "border-green-500",
  fire: "border-orange-500",
  water: "border-blue-500",
  poison: "border-purple-500",
  flying: "border-sky-400",
  bug: "border-lime-500",
  normal: "border-gray-400",
  electric: "border-yellow-400",
  ground: "border-yellow-700",
  psychic: "border-pink-400",
  ice: "border-cyan-300",
  rock: "border-yellow-800",
  ghost: "border-indigo-600",
  dragon: "border-indigo-800",
  dark: "border-zinc-800",
  steel: "border-gray-500",
  fairy: "border-pink-200",
};

export function PokemonModal({ pokemon, onClose }: Props) {
  const primaryType = pokemon.types[0]?.type.name;
  const borderColor = typeColors[primaryType] || "border-gray-300";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white p-6 rounded-xl shadow-xl relative w-80 max-h-[90vh] overflow-y-auto border-t-8 ${borderColor}`}
      >
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ×
        </button>

        <div className="flex justify-center">
          <img
            src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemon.name}
            className="w-32 h-32 drop-shadow-md"
          />
        </div>

        <h2 className="text-center text-xl font-bold mt-2 capitalize">
          {pokemon.name}
        </h2>
        <p className="text-center text-sm text-gray-500">#{pokemon.id}</p>

        <div className="flex justify-center gap-2 my-2 flex-wrap">
          {pokemon.types.map(({ type }) => (
            <span
              key={type.name}
              className="bg-gray-100 text-gray-800 px-2 py-1 text-xs rounded-full capitalize"
            >
              {type.name}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-700 mt-4">
          <p>
            <strong>Altura:</strong> {(pokemon.height / 10).toFixed(1)} m
          </p>
          <p>
            <strong>Peso:</strong> {(pokemon.weight / 10).toFixed(1)} kg
          </p>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-1">Habilidades:</p>
          <ul className="list-disc list-inside text-sm text-gray-700">
            {pokemon.abilities.map(({ ability, is_hidden }) => (
              <li key={ability.name}>
                {ability.name}{" "}
                {is_hidden && (
                  <span className="text-xs text-gray-500">(Hidden)</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {pokemon.cries?.latest && (
          <div className="mt-4 text-center">
            <button
              onClick={() => 
              {
                const audio = new Audio(pokemon.cries.latest);
                audio.volume = 0.3;
                audio.play();
              }
              }
              className="px-4 py-1 bg-slate-200 text-sm rounded hover:bg-slate-300"
            >
              🔊 Ouvir Som
            </button>
          </div>
        )}

        <details className="mt-6">
          <summary className="cursor-pointer font-semibold text-slate-600">
            Mostrar movimentos ({pokemon.moves.length})
          </summary>
          <ul className="mt-2 text-left text-sm list-disc list-inside max-h-32 overflow-y-auto pr-2">
            {pokemon.moves.map(({ move }) => (
              <li key={move.name} className="capitalize">
                {move.name}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}
