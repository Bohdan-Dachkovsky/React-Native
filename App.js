import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as dotenv from "dotenv";

export default function App() {
  if (process.env.NODE_ENV === "development") {
    console.log("Hello in development");
  }

  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
