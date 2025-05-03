import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from '../pokemon.controller';
import { PokemonService } from '../pokemon.service';
import { mockPokemonList, mockPokemon } from './fixtures/pokemon';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  const mockService = {
    getPokemonByName: jest.fn(),
    getPokemonList: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [{ provide: PokemonService, useValue: mockService }],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a pokemon by name', async () => {
    mockService.getPokemonList.mockResolvedValue(mockPokemonList);

    const result = await controller.getPokemonList(10, 0);
    expect(result).toEqual(mockPokemonList);
  });

  it('should return pokemon list', async () => {
    mockService.getPokemonByName.mockResolvedValue(mockPokemon);

    const result = await controller.getPokemonByName('pikachu');
    expect(result).toEqual(mockPokemon);
  });
});
