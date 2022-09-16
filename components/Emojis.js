import React, { useEffect } from "react";
import { Image, View } from "react-native";
import styles from "../styles/styles";


/**
 * UI View of emoticons for interacting with game host
 * @returns Emojis View
 */
const Emojis = (props) => {
  //emojis array of paths
  //image in view source is array item picked
  //animate that view??

  return (
    <View style={{alignItems: "center", justifyContent: "center", position: "relative", /*zIndex: -98, bottom: 20*/}}>
      <Image style={[styles.emoji, {position: "absolute"}]} source={"../assets/open_mouth.png"}/>
      <Image style={[styles.emoji, {position: "absolute"}]} source={require("../assets/clap.png")}/>
      <Image style={[styles.emoji, {position: "absolute"}]} source={require("../assets/joy.png")}/>
      <Image style={[styles.emoji, {position: "absolute"}]} source={require("../assets/purple_heart.png")}/>
      <Image style={[styles.emoji, {position: "absolute"}]} source={require("../assets/fire.png")}/>
      <Image style={[styles.emoji, {position: "absolute"}]} source={require("../assets/heart_eyes.png")}/>
    </View>
  );
};

export default Emojis;
