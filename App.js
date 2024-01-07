import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as dotenv from "dotenv";
dotenv.config();
if (process.env.NODE_ENV === "development") {
  console.log("Hello in development");
}

export default function App() {
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
