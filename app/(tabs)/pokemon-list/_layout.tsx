import { Stack } from "expo-router";

export default function PokemonListLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Listes Des Pokemons ",
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "Détails Du Pokemon ",
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
