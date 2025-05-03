import { useEffect, useRef, useState } from 'react';
import { getPokemonList, getPokemonByName } from '../services/pokemonService';
import { Pokemon } from '../types/pokemon';
import { PokemonCard } from '../components/pokemonCard';

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[] | null>(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const loaderRef = useRef<HTMLDivElement | null>(null);

  async function loadMore() {
    if (loading) return;
    setLoading(true);

    const data = await getPokemonList(9, offset);
    const detailed = await Promise.all(
      data.results.map(p => getPokemonByName(p.name))
    );

    setPokemons(prev => {
      const existingIds = new Set(prev.map(p => p.id));
      const unique = detailed.filter(p => !existingIds.has(p.id));
      return [...prev, ...unique];
    });

    setOffset(prev => prev + 9);
    setLoading(false);
  }

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const searchTerm = search.trim().toLowerCase();

    if (searchTerm === '') {
      setFilteredPokemons(null);
      return;
    }

    const localMatches = pokemons.filter((p) =>
      p.name.toLowerCase().includes(searchTerm)
    );

    if (localMatches.length > 0) {
      setFilteredPokemons(localMatches);
      return;
    }

    getPokemonByName(searchTerm)
      .then((result) => {
        setPokemons((prev) => {
          const alreadyExists = prev.some((p) => p.id === result.id);
          return alreadyExists ? prev : [...prev, result];
        });

      })
      .catch(() => setFilteredPokemons([]));
  }, [search, pokemons]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting && !search) {
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, search, loadMore]);

  const list = filteredPokemons ?? pokemons;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokédex</h1>

      <div className="sticky top-0 z-20 pb-4 pt-2">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-slate-400 bg-gray-100"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      {!search && (
        <div ref={loaderRef} className="h-10 mt-10 flex justify-center items-center">
          {loading && <span className="text-gray-500">Loading...</span>}
        </div>
      )}

      {search && list.length === 0 && (
        <div className="text-center text-gray-500 mt-6">Nenhum Pokémon encontrado.</div>
      )}
    </div>
  );
}
