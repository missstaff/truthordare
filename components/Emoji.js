import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import styles from "../styles/styles";
import writeData from "../helpers/WriteData";


const Emoji = (props) => {
  
  const emojiUri = props.emoji;
  const emoji = props.name;
  
  const pressed = () => {
    props.setActiveAnimatedEmoji(state => [...state, emojiUri])
    writeData(emoji, props.gameId, props.userId);
  };
  
  return (
    <TouchableOpacity onPress={() => pressed()}>
      <Image style={styles.emoji} source={emojiUri} />
    </TouchableOpacity>
  );
};

export default React.memo(Emoji);
