import React, { useState} from "react";
import { Animated, Image, TouchableOpacity } from "react-native";

import styles from "../styles/styles";


const Animation = (props) => {

  const write = async() => {
    const writeData = await props.onPress(props.emoji, props.gameId, props.userId);
    return writeData;
  };

  const animation = new Animated.Value(0);

  const animationStyles = {
    transform: [
      {
        translateY: animation,
      }
    ]
  }

  const startAnimation = () => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: -300,
      duration: 1500,
    }).start();
  }

  return (
    <TouchableOpacity style={animationStyles} onPress={() => [write(), startAnimation()]}>
      <Animated.View>
        <Image style={[styles.emoji]} source={props.emojiUri} />
      </Animated.View>
    </TouchableOpacity>
  )
};

export default Animation;