import React from "react";
import { Image, TouchableOpacity } from "react-native";

import styles from "../styles/styles";
import writeData from "../helpers/WriteData";

const Emoji = (props) => {

  const emojiUri = props.emoji;
  const emoji = props.name;


  const pressed = () => {

    const e = {
      id: Math.random(),
      emoji: emojiUri
    }

    props.setActiveAnimatedEmoji(state => {
      console.log("Running state update!");
      let trimmed = state.slice(-5);
      trimmed.push(e);
      return trimmed;
    });

    writeData(emoji, props.gameId, props.userId);
  };

  return (
    <TouchableOpacity onPress={() => pressed()}>
      <Image style={styles.emoji} source={emojiUri} />
    </TouchableOpacity>
  );
};


export default Emoji;
