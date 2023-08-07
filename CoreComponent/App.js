import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from "react-native";
import icon from "./assets/adaptive-icon.png";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Expo Hello World!</Text> */}

      {/* Box shadow  */}
      <View style={[styles.box, styles.boxShadow, styles.androidSahdow]}>
        <Text style={{ color: "#000" }}>Hello Koushik Saha</Text>
      </View>
      {/* Alert 😇 */}
      <Button
        title="Show Alert"
        onPress={() => Alert.alert("Hello React-Native", "This is a tutorial")}
      />

      <Button
        title="Show Alert 2"
        onPress={() =>
          Alert.alert("Error", "Api not found!", [
            {
              text: "cancel",
              onPress: () => console.log("cancel pressed"),
            },
            {
              text: "ok",
              onPress: () => console.log("ok pressed"),
            },
          ])
        }
      />

      {/* Activity indicator, loading animation 😇 */}
      <ActivityIndicator />
      <ActivityIndicator size={"large"} color={"midnightblue"} />
      <ActivityIndicator
        size={"large"}
        color={"midnightblue"}
        // animating={false}  it will hide the indicator
      />

      {/* STATUS BAR 😇, background color support only in android */}
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden />

      {/* Background image 😇*/}
      {/* <ImageBackground source={icon} style={{ flex: 1 }}>
        <Text>Hello Background Image</Text>
      </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  box: {
    padding: 40,
    backgroundColor: "white",
    marginBottom: 30,
  },

  // it only works in android
  boxShadow: {
    shadowColor: "#333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },

  androidSahdow: {
    elevation: 10,
  },
});

// style inheritance 🥹
// inheritance styles from view to text component is not valid but from text to text component is valid
