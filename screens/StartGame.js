import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constans/Colors";

export default function StartGame({ onSetEntredNumber }) {
  const [value, setValue] = useState("");

  function handlerSetValue(value) {
    const num = parseInt(value);

    if (num < 0) return setValue(1);
    if (num > 99) return setValue(99);
    setValue(value);
  }

  function handlerReset() {
    setValue("");
    Keyboard.dismiss();
  }

  function handlerConfirm() {
    const currentNumber = parseInt(value);

    if (!currentNumber) return;

    onSetEntredNumber(currentNumber);
  }

  return (
    // <ScrollView style={{ flex: 1 }}>
    <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Text style={styles.text}>
          Enter a number between <Text style={styles.textItem}>1</Text> and{" "}
          <Text style={styles.textItem}>99</Text> and your phone will try to
          guess it.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            onChangeText={handlerSetValue}
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
          />
          <View style={styles.actions}>
            <View style={styles.button}>
              <PrimaryButton onPressHandler={handlerReset}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPressHandler={handlerConfirm}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    gap: 32,
  },
  inputContainer: {
    padding: 16,
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    alignItems: "center",
    gap: 24,
  },
  numberInput: {
    textAlign: "center",
    borderBottomColor: Colors.accent,
    borderBottomWidth: 2,
    color: Colors.primary600,
    fontSize: 32,
    height: 50,
    minWidth: 50,
  },
  actions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flexGrow: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    color: "white",
  },
  textItem: {
    color: Colors.accent,
    fontWeight: 700,
    fontSize: 18,
  },
});
