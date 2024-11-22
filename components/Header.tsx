import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
  const route = useRouter();

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    route.push(`pokemon-list/search/${query}`);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/pokedev.png")}
          style={styles.logo}
        ></Image>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Pokémon"
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  searchButton: {
    width: "25%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
