import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <ImageBackground
      source={require("../assets/images/bg-pokemon.png")}
      style={styles.backgroundImage}
    >
      <StatusBar style="light" translucent />
      <StatusBar style="light" translucent />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
