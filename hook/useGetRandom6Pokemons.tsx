import { useState, useEffect } from "react";
import useGetPokemons from "./useGetPokemons";
import { PokemonDTO } from "@/dto/PokemonDTO";

export default function useGetRandom6Pokemons() {
  const generation = null; // or set a specific generation number
  const pokemons = useGetPokemons(generation);
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    const shuffledPokemons = pokemons.sort(() => 0.5 - Math.random());
    setSelectedPokemons(shuffledPokemons.slice(0, 6));
  }, [pokemons]);

  return selectedPokemons;
}
