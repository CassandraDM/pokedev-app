import Footer from "@/components/Footer";
import Header from "@/components/Header";
import useGetPokemonById from "@/hook/useGetPokemonById";
import { useLocalSearchParams } from "expo-router";
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";

export default function PokemonDetailsScreen() {
  const { id } = useLocalSearchParams();
  const pokemon = useGetPokemonById(Number(id));

  if (!pokemon) {
    return <Text>Aucun pokémon trouvé</Text>;
  }

  return (
    <ImageBackground
      source={require("../../../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Image source={{ uri: pokemon.image }} style={styles.image} />
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={styles.text}>#{pokemon.pokedexId}</Text>
          <Text style={styles.description}>
            {JSON.stringify(pokemon.stats)}
          </Text>
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
    paddingHorizontal: 20,
    paddingTop: 80,
    justifyContent: "space-between",
  },
  content: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "#666",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#777",
  },
});
