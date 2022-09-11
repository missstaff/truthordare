import React from "react";
import { View } from "react-native";

import Emoji from "./Emoji";
import styles from "../styles/styles";


/**
 * UI View of emoticons for interacting with game host
 * @returns Emojis View
 */
const Emojis = (props) => {
  
  return (
    <View style={styles.EmojisContainer}>
      <Emoji emoji={require("../assets/oh.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji emoji={require("../assets/clap.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji emoji={require("../assets/lol.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji emoji={require("../assets/love.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji emoji={require("../assets/fire.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji emoji={require("../assets/adore.png")} gameId={props.gameId} userId={props.userId} />
    </View>
  );
};

export default Emojis;
