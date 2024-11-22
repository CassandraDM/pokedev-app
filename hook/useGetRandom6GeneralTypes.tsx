import { GeneralTypeDTO } from "@/dto/GeneralTypeDTO";
import { useState, useEffect } from "react";
import useGetGeneralTypes from "./useGetGeneralTypes";

export default function useGetRandom6GeneralTypes() {
  const types = useGetGeneralTypes();
  const [selectedTypes, setSelectedTypes] = useState<GeneralTypeDTO[]>([]);

  useEffect(() => {
    const shuffledTypes = types.sort(() => 0.5 - Math.random());
    setSelectedTypes(shuffledTypes.slice(0, 6));
  }, [types]);

  return selectedTypes;
}
