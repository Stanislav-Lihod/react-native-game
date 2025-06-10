import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import TextTitle from "../components/TextTitle";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constans/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
}

let minBoundry = 1;
let maxBoundry = 100;

export default function Game({ entredNumber, onSetGameIsOver, onSetCounter }) {
  const [number, setNumber] = useState(() => {
    return generateRandomBetween(minBoundry, maxBoundry, entredNumber);
  });

  useEffect(() => {
    console.log(entredNumber);

    minBoundry = 1;
    maxBoundry = 100;
  }, [entredNumber]);

  const [allVariables, setAllVariables] = useState([]);

  function handlerNextGuess(direction) {
    if (
      (direction === "lower" && number < entredNumber) ||
      (direction === "higer" && number > entredNumber)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Ok, ok, sorry...", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundry = number;
    }
    if (direction === "higer") {
      minBoundry = number;
    }

    setNumber((prev) => generateRandomBetween(minBoundry, maxBoundry, prev));
    setAllVariables((prev) => [...prev, number]);
  }

  useEffect(() => {
    if (number === entredNumber) {
      onSetGameIsOver(true);
      onSetCounter(allVariables.length);
    }
  }, [number, entredNumber, onSetGameIsOver]);

  return (
    <View style={styles.container}>
      <TextTitle>Opponent's Guess</TextTitle>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.variable}>
        <Text style={styles.higer}>Higer or lower</Text>
        <View style={styles.actions}>
          <View style={styles.btn}>
            <PrimaryButton
              onPressHandler={() => {
                handlerNextGuess("lower");
              }}
            >
              <Ionicons name="remove-circle-outline" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton
              onPressHandler={() => {
                handlerNextGuess("higer");
              }}
            >
              <Ionicons name="add-sharp" size={24} />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.items}
        data={allVariables}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemTextBold}>#{index}</Text>
            <Text style={styles.itemText}>
              Opponent's guess: <Text style={styles.itemTextBold}>{item}</Text>
            </Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    alignItems: "center",
    width: "100%",
  },
  number: {
    fontWeight: 700,
    fontSize: 28,
    color: Colors.accent,
  },
  higer: {
    fontSize: 20,
    fontWeight: 500,
  },
  variable: {
    width: "100%",
    gap: 10,
    alignItems: "center",
  },
  actions: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  btn: {
    flexGrow: 1,
  },
  items: {
    width: "100%",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 28,
    backgroundColor: Colors.accent,
    padding: 12,
    marginBottom: 8,
  },
  itemText: {
    fontWeight: 600,
    fontSize: 14,
  },
  itemTextBold: {
    fontSize: 16,
    fontWeight: 800,
  },
});
