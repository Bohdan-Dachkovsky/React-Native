import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NODE_ENV } from "@env";
import Constants from "expo-constants";
if (NODE_ENV === "development") {
  console.log("Hello in development");
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image
        style={styles.image}
        src="./assets/splash.png"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      <Text>{Constants.expoConfig.extra.headers} React Native</Text>
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
