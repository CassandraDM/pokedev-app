import { PokemonDTO } from "@/dto/PokemonDTO";
import { useEffect, useState } from "react";

export default function useSearchPokemon(query: string) {
  const [pokemon, setPokemon] = useState<null | PokemonDTO>(null);

  useEffect(() => {
    (async () => {
      const url = `https://pokebuildapi.fr/api/v1/pokemon/${query}`;
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      setPokemon(data);
    })();
  }, [query]);
  return pokemon;
}
