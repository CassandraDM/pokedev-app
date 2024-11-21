import { PokemonDTO } from "@/dto/PokemonDto";
import { useState, useEffect } from "react";
import useGetPokemons from "./useGetPokemons";

export default function useGetRandom6Pokemons() {
  const pokemons = useGetPokemons();
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    const shuffledPokemons = pokemons.sort(() => 0.5 - Math.random());
    setSelectedPokemons(shuffledPokemons.slice(0, 6));
  }, [pokemons]);

  return selectedPokemons;
}