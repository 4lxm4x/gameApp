import { Pressable, View, Text, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";

export default function GameOverScreen({ restartGame }) {
  function gameRestart() {
    restartGame();
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>GAME OVER</Text>
        <MainButton onPress={gameRestart}>Start Again</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    padding: 2,
    color: "yellow",

    textAlign: "center",
  },
  container: {
    padding: 16,
    margin: 16,
    borderWidth: 2,
    borderColor: Colors.secondaryColor,
  },
});
