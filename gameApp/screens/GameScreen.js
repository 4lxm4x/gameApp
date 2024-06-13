import { Text, View, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text>Your Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower?</Text>
        {/* BUTTON + BUTTOn - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
