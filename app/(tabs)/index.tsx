import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useGetRandom6Pokemons from "@/hook/useGetRandom6Pokemons";
import useGetRandom6GeneralTypes from "@/hook/useGetRandom6GeneralTypes";
import { useRouter } from "expo-router";

export default function Index() {
  const route = useRouter();

  const pokemons = useGetRandom6Pokemons();

  const types = useGetRandom6GeneralTypes();

  const goToPokemonsListScreen = () => {
    route.push("/pokemon-list");
  };

  const goToPokemonDetailsScreen = (id: number) => {
    route.push(`/pokemon-list/details/${id}`);
  };

  const goToTypesListScreen = () => {
    route.push("/type-list");
  };

  const goToPokemonListByTypeScreen = (type: string) => {
    route.push(`/type-list/details/${type}`);
  };

  if (!pokemons) {
    return <Text>Aucun pokémon trouvé</Text>;
  } else if (!types) {
    return <Text>Aucun type trouvé</Text>;
  }

  return (
    <ImageBackground
      source={require("../../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.section}>
          <TouchableOpacity onPress={goToPokemonsListScreen}>
            <Text style={styles.h1}>Pokémons</Text>
          </TouchableOpacity>
          <ScrollView horizontal={true} style={styles.content}>
            {pokemons.map((pokemon) => (
              <TouchableOpacity
                key={pokemon.id}
                style={styles.pokemonContainer}
                onPress={() => goToPokemonDetailsScreen(pokemon.id)}
              >
                <Image
                  source={{ uri: pokemon.image }}
                  style={styles.pokemonImage}
                />
                <Text style={styles.pokemonName}>{pokemon.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <TouchableOpacity onPress={goToTypesListScreen}>
            <Text style={styles.h1}>Types</Text>
          </TouchableOpacity>
          <ScrollView horizontal={true} style={styles.content}>
            {types.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={styles.typeContainer}
                onPress={() => goToPokemonListByTypeScreen(type.name)}
              >
                <Image source={{ uri: type.image }} style={styles.typeImage} />
                <Text style={styles.typeName}>{type.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
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
    width: "100%",
    height: "30%",
    backgroundColor: "rgba(0,0,0,0.7)",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  content: {
    flexDirection: "row",
  },
  h1: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  pokemonContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  pokemonName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  typeName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  typeImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
