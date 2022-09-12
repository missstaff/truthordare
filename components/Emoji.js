import React from "react";
import { child, getDatabase, onValue, ref, set, update } from "firebase/database";

import Animation from "./Animation";
import app from "../config/firebaseConfig";
import { DBURL } from "../config/constants";
import GetEmoji from "../helpers/GetEmoji";


/**
 * Writes to real time database
 * @param {*} emoji 
 * @param {*} gameId 
 * @param {*} name 
 * @param {*} userId 
 */
async function writeData(emoji, gameId, userId) {

  const time = Date.now();
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
      });
    });
    
    emojiArr.unshift({time: time, emoji: emoji});
    return await update(childRef, {
      emojis: emojiArr,
    });
  }
  if(!data){
    return await set(childRef, {
      emojis: [{time: time, emoji: emoji}],
    });
  }
};

/**
 * Emoji Component
 * @param {*} props 
 * @returns Emoticon
 */
const Emoji = (props) => {

  const emojiUri = props.emoji;
  const emoji = GetEmoji(emojiUri);

  return (
    <Animation emoji={emoji} emojiUri={emojiUri} gameId={props.gameId} userId={props.userId} onPress={writeData}/>
  );
};

export default Emoji;
