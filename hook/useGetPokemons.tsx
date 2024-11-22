import { PokemonDTO } from "@/dto/PokemonDTO";
import { useEffect } from "react";
import { useState } from "react";

export default function useGetPokemons(generation: number | null) {
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const url = generation
          ? `https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`
          : "https://pokebuildapi.fr/api/v1/pokemon";
        const response = await fetch(url);
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    })();
  }, [generation]);
  return pokemons;
}
