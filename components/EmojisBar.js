import React from "react";
import { View } from "react-native";

import Emoji from "./Emoji";
import styles from "../styles/styles";


/**
 * UI View of emoticons for interacting with game host
 * @returns Emojis View
 */
const EmojisBar = (props) => {
  
  return (
    <View style={styles.EmojisContainer}>
      <Emoji animatedEmoji={props.animatedEmoji} name={"open_mouth"} emoji={require("../assets/open_mouth.png")} gameId={props.gameId} setAnimatedEmoji={props.setAnimatedEmoji} setStartAnim={props.setStartAnim} startAnim={props.startAnim} userId={props.userId} />
      <Emoji animatedEmoji={props.animatedEmoji} name={"clap"} emoji={require("../assets/clap.png")} gameId={props.gameId} setAnimatedEmoji={props.setAnimatedEmoji} setStartAnim={props.setStartAnim} startAnim={props.startAnim} userId={props.userId} />
      <Emoji animatedEmoji={props.animatedEmoji} name={"joy"} emoji={require("../assets/joy.png")} gameId={props.gameId} setAnimatedEmoji={props.setAnimatedEmoji} setStartAnim={props.setStartAnim} startAnim={props.startAnim} userId={props.userId} />
      <Emoji animatedEmoji={props.animatedEmoji} name={"purple_heart"} emoji={require("../assets/purple_heart.png")} setAnimatedEmoji={props.setAnimatedEmoji} gameId={props.gameId} setStartAnim={props.setStartAnim} startAnim={props.startAnim} userId={props.userId} />
      <Emoji animatedEmoji={props.animatedEmoji} name={"fire"} emoji={require("../assets/fire.png")} gameId={props.gameId} setAnimatedEmoji={props.setAnimatedEmoji} setStartAnim={props.setStartAnim} startAnim={props.startAnim} userId={props.userId} />
      <Emoji animatedEmoji={props.animatedEmoji} name={"heart_eyes"} emoji={require("../assets/heart_eyes.png")} setAnimatedEmoji={props.setAnimatedEmoji} gameId={props.gameId} setStartAnim={props.setStartAnim} startAnim={props.startAnim} userId={props.userId} />
    </View>
  );
};

export default EmojisBar;
