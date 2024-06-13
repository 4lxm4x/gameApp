import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [numberPicked, setNumberpicked] = useState();

  function handlePickedNumber(pickedNumber) {
    setNumberpicked(pickedNumber);
  }

  let screen = <GameStartScreen onPickNumber={handlePickedNumber} />;

  if (numberPicked) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={["#dbb415", "#312fa7", "#72063c"]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.innerContainer}
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.innerContainer}>{screen}</SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    opacity: 0.15,
  },
});
