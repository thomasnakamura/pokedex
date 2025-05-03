import axios from 'axios';
import { Pokemon } from '../types/pokemon';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export async function getPokemonList(limit = 9, offset = 0) {
  const response = await api.get<{ count: number; results: { name: string }[] }>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.data;
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const response = await api.get<Pokemon>(`/pokemon/${name}`);
  return response.data;
}
