import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, onPressHandler, style }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.innerContainer,
          pressed && styles.pressed,
          style,
        ]}
        onPress={onPressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#72063c",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 28,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
  },
  pressed: {
    opacity: 0.5,
  },
});
