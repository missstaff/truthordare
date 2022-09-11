import { Animated, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";



const Animation = (props) => {

  const write = async() => {
    const writeData = await props.onPress(props.emoji, props.gameId, props.userId);
    return writeData;
  }

  return (
    <TouchableOpacity onPress={write}>
      <Animated.View>
        <Image style={props.style} source={props.emojiUri} />
      </Animated.View>
    </TouchableOpacity>
  )
}
export default Animation

const styles = StyleSheet.create({})