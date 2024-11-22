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
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <View style={styles.container}>
        <Header />
        <View>
          <TextInput style={styles.input} placeholder="Enter Pokémon type" />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
