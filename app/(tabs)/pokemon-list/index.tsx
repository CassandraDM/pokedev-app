import {
  ImageBackground,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useGetPokemons from "@/hook/useGetPokemons";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function PokemonList() {
  const route = useRouter();

  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(
    null
  );
  const pokemons = useGetPokemons(selectedGeneration);

  const goToPokemonDetailsScreen = (id: number) => {
    route.push(`/pokemon-list/details/${id}`);
  };

  const handleGenerationSelect = (generation: number) => {
    setSelectedGeneration(generation);
  };

  const handleResetGeneration = () => {
    setSelectedGeneration(null);
  };

  if (!pokemons) {
    return <Text>Aucun pokémon trouvé</Text>;
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <ScrollView horizontal>
          <View style={styles.generationContainer}>
            <TouchableOpacity
              style={styles.generationButton}
              onPress={handleResetGeneration}
            >
              <Text style={styles.generationText}>All</Text>
            </TouchableOpacity>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((generation) => (
              <TouchableOpacity
                key={generation}
                style={styles.generationButton}
                onPress={() => handleGenerationSelect(generation)}
              >
                <Text style={styles.generationText}>Gen {generation}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <FlatList
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          renderItem={({ item: pokemon }) => (
            <TouchableOpacity
              key={pokemon.id}
              style={styles.pokemonContainer}
              onPress={() => goToPokemonDetailsScreen(pokemon.id)}
            >
              <Image source={{ uri: pokemon.image }} style={styles.image} />
              <Text style={styles.pokemonName}>{pokemon.name}</Text>
            </TouchableOpacity>
          )}
        />
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
  generationContainer: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    paddingBottom: 10,
  },
  generationButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  generationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  pokemonContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
