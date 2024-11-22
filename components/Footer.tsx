import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© PokéDev 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#bbbbbb",
  },
});
