import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [numberPicked, setNumberPicked] = useState("");
  const [gameOver, setGameOver] = useState(true);

  function handlePickedNumber(pickedNumber) {
    setNumberPicked(pickedNumber);
    setGameOver(false);
  }

  function handleGameOver() {
    setGameOver(true);
    setNumberPicked("");
  }

  function handleRestart() {
    setNumberPicked("");
  }

  let screen = <GameStartScreen onPickNumber={handlePickedNumber} />;

  if (numberPicked && !gameOver) {
    screen = <GameScreen userNumber={numberPicked} gameOver={handleGameOver} />;
  }

  if (gameOver && numberPicked) {
    screen = <GameOverScreen restartGame={handleRestart} />;
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
