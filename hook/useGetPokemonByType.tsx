import { PokemonDTO } from "@/dto/PokemonDTO";
import { useState, useEffect } from "react";

export default function useGetPokemonByType(type: string) {
  const [pokemonByType, setPokemonByType] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/type/${type}`
        );
        const data = await response.json();
        setPokemonByType(data);
      } catch (error) {
        console.error("Error fetching pokemon by type:", error);
      }
    })();
  }, [type]);
  return pokemonByType;
}
