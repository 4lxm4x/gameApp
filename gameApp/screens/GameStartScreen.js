import { StyleSheet, TextInput, View } from "react-native";
import MainButton from "../components/MainButton";

export default function () {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoComplete="false"
        autoCorrect={false}
      />
      <View style={styles.buttonContainer}>
        <MainButton>Submit</MainButton>
        <MainButton>Reset</MainButton>
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
