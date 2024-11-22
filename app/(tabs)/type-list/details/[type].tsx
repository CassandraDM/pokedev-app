import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import useGetPokemonByType from "@/hook/useGetPokemonByType";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function PokemonsByTypeScreen() {
  const route = useRouter();

  const { type } = useLocalSearchParams();
  const pokemons = useGetPokemonByType(String(type));

  const goToPokemonDetailsScreen = (id: number) => {
    route.push(`/pokemon-list/details/${id}`);
  };

  if (!pokemons) {
    return <Text>Aucun pokémons trouvé</Text>;
  }

  return (
    <ImageBackground
      source={require("../../../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {pokemons.map((pokemon) => (
            <TouchableOpacity
              key={pokemon.id}
              style={styles.pokemonContainer}
              onPress={() => goToPokemonDetailsScreen(pokemon.id)}
            >
              <Image source={{ uri: pokemon.image }} style={styles.image} />
              <Text style={styles.name}>{pokemon.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    paddingTop: 80,
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
