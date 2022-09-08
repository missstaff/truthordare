import { StyleSheet, View } from 'react-native';
import React from 'react';

import Emoji from './Emoji';


/**
 * UI View of emoticons for interacting with game host
 * @returns Emojis View
 */
const Emojis = (props) => {
  
  return (
    <View style={styles.container}>
      <Emoji gameId={props.gameId} userId={props.userId} emoji={require("../assets/oh.png")} />
      <Emoji gameId={props.gameId} userId={props.userId} emoji={require("../assets/clap.png")} />
      <Emoji gameId={props.gameId} userId={props.userId} emoji={require("../assets/lol.png")} />
      <Emoji gameId={props.gameId} userId={props.userId} emoji={require("../assets/love.png")} />
      <Emoji gameId={props.gameId} userId={props.userId} emoji={require("../assets/fire.png")} />
      <Emoji gameId={props.gameId} userId={props.userId} emoji={require("../assets/adore.png")} />
    </View>
  );
};

export default Emojis;

const styles = StyleSheet.create({
    container: {
      alignItems: "center", 
      backgroundColor: "#222", 
      borderRadius: 25, 
      display: "flex",
      flexDirection: "row",
      height: 50, 
      justifyContent: "space-evenly", 
      marginTop: 25, 
      marginRight: 10,
      marginLeft: 10, 
      padding: 10,
    },
});