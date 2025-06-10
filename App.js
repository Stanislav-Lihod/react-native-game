import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

export default function App() {
  const [entredNumber, setEntredNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [counterAttempts, setCounterAttempts] = useState(0);

  function restartHandler() {
    setEntredNumber(null);
    setGameIsOver(false);
    setCounterAttempts(0);
  }

  let screen = <StartGame onSetEntredNumber={setEntredNumber} />;

  // if (!entredNumber) {
  //   screen = <StartGame onSetEntredNumber={setEntredNumber} />;
  // }

  if (entredNumber) {
    screen = (
      <Game
        entredNumber={entredNumber}
        onSetGameIsOver={setGameIsOver}
        onSetCounter={setCounterAttempts}
      />
    );
  }

  if (gameIsOver) {
    screen = (
      <GameOver
        onRestart={restartHandler}
        userNumber={entredNumber}
        counter={counterAttempts}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#4e0329", "#ddb52f"]}
        style={styles.bgContainer}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.bgContainer}
          imageStyle={styles.bgImage}
        >
          <SafeAreaView>
            <View style={styles.container}>{screen}</View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flexGrow: 1,
  },
  container: {
    marginTop: Platform.OS === "android" ? 100 : 0,
    paddingHorizontal: 16,
  },
  bgImage: {
    opacity: 0.3,
  },
});
