import { PokemonDTO } from "@/dto/PokemonDTO";
import { useState, useEffect } from "react";

export default function useGet1PokemonByType(type: string) {
  const [pokemon, setPokemon] = useState<PokemonDTO | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokebuildapi.fr/api/v1/pokemon/type/${type}`
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setPokemon(data[0]);
        } else {
          setPokemon(null);
        }
      } catch (error) {
        console.error("Error fetching pokemon by type:", error);
        setPokemon(null);
      }
    };

    if (type) {
      fetchPokemon();
    }
  }, [type]);
  console.log(pokemon);

  return pokemon;
}
