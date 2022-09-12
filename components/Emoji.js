import React from "react";
import { Animated, Image, TouchableOpacity } from "react-native";

import GetEmoji from "../helpers/GetEmoji";
import styles from "../styles/styles";
import writeData from "../helpers/WriteData";



/**
 * Emoji Component
 * @param {*} props 
 * @returns Emoticon
 */
const Emoji = (props) => {

  const emojiUri = props.emoji;
  const emoji = GetEmoji(emojiUri);

  return (
    // <Animation emoji={emoji} emojiUri={emojiUri} gameId={props.gameId} userId={props.userId} onPress={writeData}/>
    <TouchableOpacity onPress={() => writeData(emoji, props.gameId, props.userId)}>
      <Image style={[styles.emoji]} source={emojiUri} />
    </TouchableOpacity>
  );
};

export default Emoji;
