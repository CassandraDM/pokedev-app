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
import { useRouter } from "expo-router";
import useGetGeneralTypes from "@/hook/useGetGeneralTypes";

export default function PokemonList() {
  const route = useRouter();

  const types = useGetGeneralTypes();

  const goToPokemonListByTypeScreen = (type: string) => {
    route.push(`/type-list/details/${type}`);
  };

  if (!types) {
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
          data={types}
          keyExtractor={(type) => type.id.toString()}
          renderItem={({ item: type }) => (
            <TouchableOpacity
              key={type.id}
              style={styles.typeContainer}
              onPress={() => goToPokemonListByTypeScreen(type.name)}
            >
              <Image source={{ uri: type.image }} style={styles.image} />
              <Text style={styles.name}>{type.name}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={styles.wrapContainer}
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
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 80,
  },

  wrapContainer: {
    justifyContent: "space-around",
  },
  typeContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
