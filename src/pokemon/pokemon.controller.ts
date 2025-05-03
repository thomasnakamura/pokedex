import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  async getPokemonList(
    @Query('limit') limit: number = 20,
    @Query('offset') offset: number = 0
  ) {
    return this.pokemonService.getPokemonList(limit, offset);
  }

  @Get(':name')
  async getPokemonByName(@Param('name') name: string) {
    return this.pokemonService.getPokemonByName(name);
  }
}
