import React from "react";
import { Animated, Image, TouchableOpacity } from "react-native";

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
    // <Animation emoji={emoji} emojiUri={emojiUri} gameId={props.gameId} userId={props.userId} onPress={writeData}/>
    <TouchableOpacity onPress={() => [writeData(emoji, props.gameId, props.userId), console.log("??", props.name)]}>
      <Image style={[styles.emoji]} source={emojiUri} />
    </TouchableOpacity>
  );
};

export default Emoji;
