import { SafeAreaView } from "react-native-safe-area-context";
import {ScrollView} from "react-native";


import Emojis from "./components/Emojis";
import GameAvatars from "./components/GameAvatars";
import Title from "./components/Title";

import styles from "./styles/styles";
import { data } from "./data/data";



export default function App() {

  const players = data.gameShowUser;
  const gameId = data.gameId;
  const currentUserId = "zoOb78tuygh"

  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Title />
        <GameAvatars players={players} />
        <Emojis gameId={gameId} userId={currentUserId}/>
      </ScrollView>
    </SafeAreaView>
  );
};


