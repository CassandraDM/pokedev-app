import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useGetRandom6Pokemons from "@/hook/useGetRandom6Pokemons";
import useGeneralType from "@/hook/useGeneralType";

export default function Index() {
  const pokemons = useGetRandom6Pokemons();

  const types = useGeneralType();

  return (
    <ImageBackground
      source={require("../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.section}>
          {pokemons.map((pokemon) => (
            <View key={pokemon.id} style={styles.pokemonContainer}>
              <Text style={styles.pokemonName}>{pokemon.name}</Text>
              <Image
                source={{ uri: pokemon.image }}
                style={styles.pokemonImage}
              />
            </View>
          ))}
        </View>
        <View style={styles.section}>
          {types.map((type) => (
            <View key={type.id} style={styles.typeContainer}>
              <Text style={styles.typeName}>{type.name}</Text>
              <Image source={{ uri: type.image }} style={styles.typeImage} />
            </View>
          ))}
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
  section: {
    flexDirection: "row",
    width: "100%",
    height: 200,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 20,
  },
  pokemonContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  pokemonName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  typeName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  typeImage: {
    width: 100,
    height: 100,
  },
});
