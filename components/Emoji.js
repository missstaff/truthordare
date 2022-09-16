import React from "react";
import { Image, TouchableOpacity } from "react-native";

import styles from "../styles/styles";
import writeData from "../helpers/WriteData";



/**
 * Emoji Component
 * @param {*} props 
 * @returns Emoticon
 */
const Emoji = (props) => {
  
  const emojiUri = props.emoji;
  const emoji = props.name;

  return (
    <TouchableOpacity onPress={() => [writeData(emoji, props.gameId, props.userId), props.setAnimatedEmoji(emojiUri), props.setStartAnim(true)]}>
      <Image style={[styles.emoji]} source={emojiUri} />
    </TouchableOpacity>
  );
};

export default Emoji;
