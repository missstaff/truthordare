import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import AnimatedEmoji from "./components/AnimatedEmoji";
import EmojisBar from "./components/EmojisBar";
import GameAvatars from "./components/GameAvatars";
import Title from "./components/Title";

import styles from "./styles/styles";
import { data } from "./data/data";

export default function App() {
            
  const players = data.gameShowUser;
  const gameId = data.gameId;
  const currentUserId = "zoOb78tuygh";

  const [activeAnimatedEmoji, setActiveAnimatedEmoji] = useState([]);

 
  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Title />
        <GameAvatars players={players} />
        
        <EmojisBar
          activeAnimatedEmoji={activeAnimatedEmoji} 
          gameId={gameId}
          setActiveAnimatedEmoji={setActiveAnimatedEmoji} 
          userId={currentUserId}
          />
        
        {activeAnimatedEmoji.map((e, idx) => {
           return <AnimatedEmoji key={idx} style={[styles.emoji,]} source={e} activeAnimatedEmoji={activeAnimatedEmoji} setActiveAnimatedEmoji={setActiveAnimatedEmoji} />;
        })}
    
      </ScrollView>
    </SafeAreaView>
  );
};


