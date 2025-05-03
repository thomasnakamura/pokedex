import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [HttpModule, PokemonModule],
})
export class AppModule {}
