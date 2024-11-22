import { PokemonDTO } from "@/dto/PokemonDTO";
import { useState, useEffect } from "react";
import useGetPokemonByType from "./useGetPokemonByType";

export default function useGetPokemonById(type: string) {
  const [pokemon, setPokemon] = useState<PokemonDTO | null>(null);

  useEffect(() => {
    (async () => {
      const pokemons = await useGetPokemonByType(String(type));
      setPokemon(pokemons[0]);
    })();
  }, [type]);
  return pokemon;
}
