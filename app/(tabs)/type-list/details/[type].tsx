import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import useGetPokemonByType from "@/hook/useGetPokemonByType";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function PokemonsByTypeScreen() {
  const { type } = useLocalSearchParams();
  const pokemons = useGetPokemonByType(String(type));

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
            <View key={pokemon.id} style={styles.pokemonContainer}>
              <Image source={{ uri: pokemon.image }} style={styles.image} />
              <Text style={styles.name}>{pokemon.name}</Text>
            </View>
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

  pokemonContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",

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
