// import useGet1PokemonByType from "@/hook/useGet1PokemonByType";
// import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Text,
  Vibration,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function FightScreen() {
  //   const [type, setType] = useState("");
  //   const [teamPokemon, setTeamPokemon] = useState<any>(null);

  //   useEffect(() => {
  //     if (type) {
  //       const pokemon = useGet1PokemonByType(type);
  //       setTeamPokemon(pokemon);
  //     }
  //   }, [type]);

  //   const handleFormSubmit = () => {
  //     if (!teamPokemon) {
  //       Alert.alert("Error", "Pokemon Not Found");
  //       return;
  //     }
  //     Alert.alert(
  //       "Team Update",
  //       `Pokemon ${teamPokemon.name} added to your team!`
  //     );
  //     // Vibration.vibrate(200);
  //   };

  return (
    <ImageBackground
      source={require("../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon type"
        //        value={type}
        //       onChangeText={setType}
      />
      <TouchableOpacity>
        <Text>Search</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  //   container: {
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
});
