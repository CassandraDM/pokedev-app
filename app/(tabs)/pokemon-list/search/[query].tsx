import useSearchPokemon from "@/hook/useSearchPokemons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, ImageBackground, Text, StyleSheet, Image } from "react-native";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SearchPokemonScreen() {
  const { query } = useLocalSearchParams();
  const pokemon = useSearchPokemon(String(query));

  if (!pokemon) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground
      source={require("../../../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View key={pokemon.pokedexId} style={styles.pokemonContainer}>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.text}>#{pokemon.pokedexId}</Text>
            <Text style={styles.description}>{pokemon.description}</Text>
          </View>
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
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pokemonContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    color: "#333",
    fontSize: 16,
  },
  description: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
});
