import { Tabs } from "expo-router";
//ionicons
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="pokemon-list"
        options={{
          title: "Pokemons ",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="type-list"
        options={{
          title: "Types ",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: "Pokémon aléatoire",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shuffle" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="fight"
        options={{
          title: "Combat",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="skull" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
