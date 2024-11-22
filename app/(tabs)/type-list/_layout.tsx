import { Stack, useLocalSearchParams } from "expo-router";

export default function TypeListLayout() {
  const { type } = useLocalSearchParams();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Liste Des Types",
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="details/[type]"
        options={{
          title: type ? `Liste Du Type ${type}` : "Détails",
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
