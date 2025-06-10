import { StyleSheet, Text, View } from "react-native";
import Colors from "../constans/Colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOver({ userNumber, counter, onRestart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Game Over</Text>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.textItem}>{counter}</Text>{" "}
        attempts to guess your number{" "}
        <Text style={styles.textItem}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPressHandler={onRestart} style={styles.btn}>
        <Text>Restart</Text>
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginTop: 40,
  },
  header: {
    fontSize: 32,
    borderColor: "white",
    borderWidth: 3,
    textAlign: "center",
    fontWeight: 500,
    color: "white",
    padding: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: 500,
    textAlign: "center",
    color: "white",
  },
  textItem: {
    color: Colors.accent,
    fontWeight: 700,
    fontSize: 24,
  },
  btn: {
    marginTop: 40,
  },
});
