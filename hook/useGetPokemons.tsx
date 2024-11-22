import { PokemonDTO } from "@/dto/PokemonDTO";
import { useEffect } from "react";
import { useState } from "react";

export default function useGetPokemons() {
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://pokebuildapi.fr/api/v1/pokemon");
        const data = await response.json();
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    })();
  }, []);
  return pokemons;
}
