import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MainButton({ children, onPress }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#5c0430",
    marginHorizontal: 8,
  },
  buttonText: {
    color: "yellow",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.5,
  },
});
