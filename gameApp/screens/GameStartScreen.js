import { Alert, StyleSheet, TextInput, View } from "react-native";
import MainButton from "../components/MainButton";
import { useState } from "react";

export default function GameStartScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleSubmitPressed() {
    const validNumber = parseInt(enteredNumber);

    if (isNaN(validNumber) || validNumber <= 0 || validNumber >= 99) {
      Alert.alert("Wrong value!", "Please enter value from 1 to 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
    } else {
      onPickNumber(enteredNumber);
    }
  }

  function handleReset() {
    setEnteredNumber("");
  }

  function handleChangeText(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        autoFocus
        maxLength={2}
        keyboardType="number-pad"
        autoComplete="false"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={handleChangeText}
      />
      <View style={styles.buttonContainer}>
        <MainButton onPress={handleSubmitPressed}>Submit</MainButton>
        <MainButton onPress={handleReset}>Reset</MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    padding: 24,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: 8,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    alignItems: "center",
    elevation: 4,
  },
  textInput: {
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "yellow",
    padding: 2,
    color: "yellow",
    width: "20%",
    textAlign: "center",
  },
  buttonContainer: {
    paddingVertical: 8,
    marginTop: 24,

    flexDirection: "row",
    justifyContent: "space-around",
  },
});
