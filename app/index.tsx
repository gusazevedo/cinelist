import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Text style={styles.text}>Welcome to Cinelist!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222831",
  },
  text: {
    color: "#f3f3f3",
    fontSize: 18,
  },
});
