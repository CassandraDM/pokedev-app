import { PokemonDTO } from "@/dto/PokemonDTO";
import { useEffect, useState } from "react";

export default function useGetRandomMeal() {
  const [pokemon, setPokemon] = useState<PokemonDTO | null>(null);

  const id = Math.floor(Math.random() * 898) + 1;

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
  }, []);

  return pokemon;
}
