import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from '../pokemon.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';

import { mockPokemon, mockPokemonList } from './fixtures/pokemon';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpService: HttpService;

  const mockHttpService = {
    get: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: HttpService, useValue: mockHttpService },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should return a pokemon by name', async () => {
    mockHttpService.get.mockReturnValueOnce(of({ data: mockPokemon}));

    const result = await service.getPokemonByName('pikachu');
    expect(result).toEqual(mockPokemon);
    expect(mockHttpService.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu');
  });

  it('should return pokemon list', async () => {
    mockHttpService.get.mockReturnValueOnce(of({ data: mockPokemonList }));

    const result = await service.getPokemonList(10, 0);
    expect(result).toEqual(mockPokemonList);
    expect(mockHttpService.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  });
});
