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
        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.text}>{pokemon.pokedexId}</Text>
        <Text style={styles.description}>{JSON.stringify(pokemon.stats)}</Text>
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
    justifyContent: "center",
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
