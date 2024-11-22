import { useEffect, useState } from "react";

export default function useSearchPokemons(query: string) {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const url = `https://pokebuildapi.fr/api/v1/pokemon/${query}`;
      const response = await fetch(url);

      const data = await response.json();

      setPokemons(data);
    })();
  }, [query]);
  return pokemons;
}
