import { GeneralTypeDTO } from "@/dto/GeneralTypeDTO";
import { useState, useEffect } from "react";

export default function useGeneralType() {
  const [types, setTypes] = useState<GeneralTypeDTO[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://pokebuildapi.fr/api/v1/types");
        const data = await response.json();
        setTypes(data);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    })();
  }, []);

  return types;
}
