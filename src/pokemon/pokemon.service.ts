import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PokemonResponse } from './types/pokemon-response-interface';

@Injectable()
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2';
  private readonly pokemonEndpoint = `${this.baseUrl}/pokemon`;

  constructor(private readonly httpService: HttpService) {}

  async getPokemonByName(name: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get<PokemonResponse>(`${this.pokemonEndpoint}/${name.toLowerCase()}`)
      );
  
      if (Array.isArray(data?.abilities)) {
        data.abilities = data.abilities.sort((a, b) =>
          a.ability?.name.localeCompare(b.ability?.name)
        );
      }

      if (Array.isArray(data?.moves)) {
        data.moves.sort((a, b) =>
          a.move?.name.localeCompare(b.move?.name)
        );
      }
  
      return data;
    } catch (error) {
      throw new NotFoundException(`Pokémon "${name}" não encontrado.`);
    }
  }

  async getPokemonList(limit = 20, offset = 0) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.pokemonEndpoint}?limit=${limit}&offset=${offset}`)
    );
    return data;
  }
}

