import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, ScrollView } from "react-native";

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

  // const [startAnim, setStartAnim] = useState(false);
  // const [animation, setAnimation] = useState(new Animated.Value(0));
  // const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [activeAnimatedEmoji, setActiveAnimatedEmoji] = useState([]);


  // useEffect(() => {
    
  //   if (startAnim === true) {
  //     startAnimation();
  //     resetAnimation();
  //   }
  // }, [startAnim]);



  // const resetAnimation = () => {
  //   setTimeout(() => {
  //     setAnimation(new Animated.Value(0));
  //     setFadeAnim(new Animated.Value(1));
  //     setStartAnim(false);
  //   }, 1500);
  // };


  // const animationStyles = {
  //   opacity: fadeAnim,
  //   transform: [
  //     {
  //       translateY: animation,
  //     },
  //   ],
  // };

  // const startAnimation = () => {
  //   Animated.timing(animation, {
  //     useNativeDriver: true,
  //     toValue: -300,
  //     duration: 1000,
  //   }).start(() => {
  //     Animated.timing(fadeAnim, {
  //       useNativeDriver: true,
  //       toValue: 0,
  //       duration: 500
  //     }).start();
  //   });
  // };


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


