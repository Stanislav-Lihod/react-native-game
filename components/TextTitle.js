import { StyleSheet, Text } from "react-native";
import Colors from "../constans/Colors";

export default function TextTitle({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.accent,
    borderWidth: 3,
    borderColor: Colors.accent,
    padding: 12,
  },
});
