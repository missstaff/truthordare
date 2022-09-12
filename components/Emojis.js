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
      <Emoji name={"open_mouth"} emoji={require("../assets/open_mouth.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji name={"clap"} emoji={require("../assets/clap.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji name={"joy"} emoji={require("../assets/joy.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji name={"purple_heart"} emoji={require("../assets/purple_heart.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji name={"fire"} emoji={require("../assets/fire.png")} gameId={props.gameId} userId={props.userId} />
      <Emoji name={"heart_eyes"} emoji={require("../assets/heart_eyes.png")} gameId={props.gameId} userId={props.userId} />
    </View>
  );
};

export default Emojis;
