import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import Colors from "../utils/Colors";
import NumberGenerator from "../utils/numberGenerator";
import { useState } from "react";
import MainButton from "../components/MainButton";

export default function GameScreen({ userNumber, gameOver }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  console.log(parseInt(userNumber));

  let ooponentNum = NumberGenerator(min, max, userNumber);

  if (parseInt(userNumber) === ooponentNum) {
    gameOver();
  }

  function increaseHandler() {
    if (userNumber < ooponentNum) {
      Alert.alert("Don't lie!", "You pressed wrong button", "Okay");
      return;
    }
    setMin(ooponentNum);
    NumberGenerator(min, max, ooponentNum);
  }

  function decreaseHandler() {
    if (userNumber > ooponentNum) {
      Alert.alert("Don't lie!", "You pressed wrong button", "Okay");
      return;
    }
    setMax(ooponentNum);
    NumberGenerator(min, max, ooponentNum);
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.text}>Opponent Guess</Text>
        <Text style={styles.text}>{ooponentNum}</Text>
      </View>

      {/* Guess */}
      <View style={styles.buttonsContainer}>
        <MainButton onPress={decreaseHandler}>Lower</MainButton>
        <MainButton onPress={increaseHandler}>Higher</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  upperContainer: {
    padding: 16,
    margin: 16,
    borderWidth: 2,
    borderColor: Colors.secondaryColor,
  },
  text: {
    margin: 16,
    fontSize: 32,
    color: Colors.secondaryColor,
    textAlign: "center",
  },
  buttons: {
    borderWidth: 1,
    borderColor: Colors.secondaryColor,
    marginHorizontal: 16,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: 4,
    shadowRadius: 2,
    borderRadius: 4,
    backgroundColor: "grey",
  },
  higherButton: {
    color: "red",
  },
  lowerButton: {
    color: "blue",
  },
  buttonText: {
    fontSize: 24,
    color: Colors.secondaryColor,
    paddingVertical: 8,
    paddingHorizontal: 24,
    fontWeight: 500,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
  },
});
