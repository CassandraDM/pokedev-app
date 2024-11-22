import { PokemonDTO } from "@/dto/PokemonDTO";
import { useState, useEffect } from "react";

export default function useGetPokemonById(id: number) {
  const [pokemon, setPokemon] = useState<PokemonDTO | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/${id}`
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      }
    })();
  }, [id]);
  return pokemon;
}
