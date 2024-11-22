import useGet1PokemonByType from "@/hook/useGet1PokemonByType";
import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useGetRandomPokemon from "@/hook/useGetRandomPokemon";

export default function FightScreen() {
  const [type, setType] = useState("");
  const teamPokemon = useGet1PokemonByType(type);
  const ennemyPokemon = useGetRandomPokemon();

  const handleFormSubmit = () => {
    if (!teamPokemon) {
      Alert.alert("Error", "Pokemon Not Found");
      return;
    }
    Alert.alert(
      "Team Update",
      `Pokemon ${teamPokemon.name} added to your team!`
    );
    // Vibration.vibrate(200);
  };

  //affter the teamPokemon is set, an alert with the ennemy pop after a time of 3seconds
  useEffect(() => {
    if (teamPokemon) {
      setTimeout(() => {
        Alert.alert("Ennemy", `A wild ${ennemyPokemon.name} appeared!`);
        // Vibration.vibrate(200);
      }, 3000);
    }
  }, [teamPokemon]);

  //after 3seconds of the ennemy pop, the fight result will be shown
  useEffect(() => {
    if (ennemyPokemon) {
      setTimeout(() => {
        Alert.alert("Fight Result", "You Win!");
        // Vibration.vibrate(200);
      }, 6000);
    }
  }, [ennemyPokemon]);

  return (
    <ImageBackground
      source={require("../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter Pokémon type"
            value={type}
            onChangeText={setType}
          />
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        {teamPokemon?.sprite && (
          <View>
            <Image
              source={{ uri: teamPokemon.sprite }}
              style={styles.pokemonImage}
            />
            <Text>{teamPokemon.name}</Text>
          </View>
        )}
        {ennemyPokemon?.sprite && (
          <View>
            <Image
              source={{ uri: ennemyPokemon.sprite }}
              style={styles.pokemonImage}
            />
            <Text>{ennemyPokemon.name}</Text>
          </View>
        )}
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

  pokemonImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
