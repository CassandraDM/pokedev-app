import useSearchPokemons from "@/hook/useSearchPokemons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

export default function SearchPokemonScreen() {
  const { query } = useLocalSearchParams();
  const pokemons = useSearchPokemons(String(query));

  if (pokemons.length === 0) {
    return <Text>Pokemon Not Found</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
