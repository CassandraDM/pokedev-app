import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useGetRandomPokemon from "@/hook/useGetRandomPokemon";

export default function RandomMealScreen() {
  const pokemon = useGetRandomPokemon();

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Pokemon not found</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.text}>{pokemon.pokedexId}</Text>
        <Text style={styles.description}>{JSON.stringify(pokemon.stats)}</Text>
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
