import React from 'react';
import { child, getDatabase, onValue, ref, set, update } from "firebase/database";
import {
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


import app from "../config/firebaseConfig";
import {DBURL} from "../config/constants"


/**
 * Writes to real time database
 * @param {*} emoji 
 * @param {*} gameId 
 * @param {*} name 
 * @param {*} userId 
 */
async function writeData(emoji, gameId, userId) {

  const now = Date.now();
  const db = getDatabase(app, DBURL);
  const dbRef = ref(db, `live_chat/`);
  const childRef = child(dbRef, `${gameId}/${userId}`);


  let data;
  onValue(dbRef, (snapshot) => {
    data = snapshot.val();
  });
  

  let emojiArr;
  if(data){
    Object.values(data).forEach((v) => {
      Object.values(v).forEach((x) => {
        emojiArr = x.emojis;
      })
    })
    
    emojiArr.unshift({time: now, emoji: emoji});
    return update(childRef, {
      emojis: emojiArr,
    })
  }
  if(!data){
    return set(childRef, {
      emojis: [{now: now, emoji: emoji}],
    });
  }
  
}



/**
 * 
 * @param {*} props 
 * @returns Emoticon
 */
const Emoji = (props) => {
  let emoji = "";
  switch (props.emoji) {
    case (19):
      emoji = "Surprised Face with Open Mouth"
      break;
    case (20):
      emoji = "Clapping Hands"
      break;
    case (21):
      emoji = "Rolling on the Floor Laughing"
      break;
    case (22):
      emoji = "Purple Heart"
      break;
    case (23):
      emoji = "Fire"
      break;
    case (24):
      emoji = " Smiling Face with Heart-Eyes"
      break;
  }

  return (
    <TouchableOpacity onPress={() => writeData(emoji, props.gameId, props.userId)}>
      <Image style={styles.emoji} source={props.emoji} />
    </TouchableOpacity>
  );
};

export default Emoji;

const styles = StyleSheet.create({
  emoji: {
    height: 25,
    marginRight: 15,
    marginLeft: 15,
    padding: 15,
    width: 25,
  },
});