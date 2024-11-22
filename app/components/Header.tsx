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
    route.push(`../pokemon-list/search/${query}`);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/pokedev.png")}
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
    gap: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 150,
    height: 60,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    height: 40,
    width: "70%",
    borderColor: "#000033",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: "25%",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
