import {
  ImageBackground,
  View,
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

export default function PokemonList() {
  const route = useRouter();

  const pokemons = useGetPokemons();

  const goToPokemonDetailsScreen = (id: number) => {
    route.push(`/pokemon-list/details/${id}`);
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
              <Text style={styles.name}>{pokemon.name}</Text>
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
    paddingTop: 80,
  },
  pokemonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
