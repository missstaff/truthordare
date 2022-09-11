import React from "react";
import { Animated, Image, TouchableOpacity } from "react-native";

import styles from "../styles/styles";


const Animation = (props) => {

  const write = async() => {
    const writeData = await props.onPress(props.emoji, props.gameId, props.userId);
    return writeData;
  };

  return (
    <TouchableOpacity onPress={write}>
      <Animated.View>
        <Image style={styles.emoji} source={props.emojiUri} />
      </Animated.View>
    </TouchableOpacity>
  )
};

export default Animation;