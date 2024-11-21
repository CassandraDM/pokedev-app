import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/Pokemon-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>PokeDev!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  logo: {
    width: 60,
    height: 60,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    marginVertical: 15,
  },
});
