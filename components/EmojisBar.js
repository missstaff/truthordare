import React, { useEffect } from "react";
import { View } from "react-native";

import Emoji from "./Emoji";
import styles from "../styles/styles";


const EmojisBar = (props) => {
  
  return (
    <View style={styles.EmojisContainer}>
      <Emoji 
        activeAnimatedEmoji={props.activeAnimatedEmoji} 
        emoji={require("../assets/open_mouth.png")} 
        gameId={props.gameId}
        name={"open_mouth"} 
        setActiveAnimatedEmoji={props.setActiveAnimatedEmoji} 
        userId={props.userId} 
      />
      <Emoji 
        activeAnimatedEmoji={props.activeAnimatedEmoji} 
        emoji={require("../assets/clap.png")} 
        gameId={props.gameId} 
        name={"clap"} 
        setActiveAnimatedEmoji={props.setActiveAnimatedEmoji} 
        userId={props.userId} 
      />
      <Emoji 
        activeAnimatedEmoji={props.activeAnimatedEmoji} 
        emoji={require("../assets/joy.png")} 
        gameId={props.gameId} 
        name={"joy"} 
        setActiveAnimatedEmoji={props.setActiveAnimatedEmoji} 
        userId={props.userId} 
      />
      <Emoji 
        activeAnimatedEmoji={props.setActiveAnimatedEmoji} 
        emoji={require("../assets/purple_heart.png")} 
        gameId={props.gameId} 
        name={"purple_heart"}
        setActiveAnimatedEmoji={props.setActiveAnimatedEmoji} 
        userId={props.userId} 
      />
      <Emoji 
        activeAnimatedEmoji={props.activeAnimatedEmoji} 
        emoji={require("../assets/fire.png")} 
        gameId={props.gameId} 
        name={"fire"} 
        setActiveAnimatedEmoji={props.setActiveAnimatedEmoji} 
        userId={props.userId} 
      />
      <Emoji 
        activeAnimatedEmoji={props.activeAnimatedEmoji} 
        emoji={require("../assets/heart_eyes.png")} 
        gameId={props.gameId} 
        name={"heart_eyes"} 
        setActiveAnimatedEmoji={props.setActiveAnimatedEmoji} 
        userId={props.userId} 
      />
    </View>
  );
};

export default EmojisBar;
