import app from "../config/firebaseConfig";
import { DBURL } from "../config/constants";
import { child, getDatabase, onValue, ref, set, update } from "firebase/database";

/**
 * Writes to real time database
 * @param {*} emoji 
 * @param {*} gameId 
 * @param {*} name 
 * @param {*} userId 
 */
const writeData = async(emoji, gameId, userId) => {

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

export default writeData;