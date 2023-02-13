import { PokemonRepository } from "../../infrastructure/pokemon.repository";
import { CreatePokemonUsecase } from "./create-pokemon.usecase";
import { GetAllPokemonUsecase } from "./get-all-pokemons.usecase";
import { FindPokemonsUsecase } from "./find-pokemon.usecase";
import { UpdatePokemonUsecase } from "./update-pokemon.usecase";

export type PokemonContainer = {
  createPokemonUsecase: CreatePokemonUsecase;
  getAllPokemonUsecase: GetAllPokemonUsecase;
  findPokemonsUsecase:  FindPokemonsUsecase;
  updatePokemonUsecase: UpdatePokemonUsecase;
};

export const initPokemonContainer = (): PokemonContainer => {
  const pokemonRepository = new PokemonRepository();
  const createPokemonUsecase = new CreatePokemonUsecase(pokemonRepository);
  const getAllPokemonUsecase = new GetAllPokemonUsecase(pokemonRepository);
  const findPokemonsUsecase = new  FindPokemonsUsecase(pokemonRepository);
  const updatePokemonUsecase = new UpdatePokemonUsecase(pokemonRepository);

  return {
    createPokemonUsecase,
    getAllPokemonUsecase,
    findPokemonsUsecase,
    updatePokemonUsecase,
  };
};
