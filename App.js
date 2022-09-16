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

  const [startAnim, setStartAnim] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [fadeAnim, setFadeAnim] = useState(useRef(new Animated.Value(1)).current);
  const [animatedEmoji, setAnimatedEmoji] = useState(null);

  useEffect(() => {
   if(startAnim === true) startAnimation();
  }, [startAnim]);


  const animationStyles = {
    transform: [
      {
        translateY: animation,
      },
    ],
  };

  const startAnimation = () => {
    Animated.timing(animation, {
      useNativeDriver: true,
      toValue: -300,
      duration: 1000,
    }).start(() => {
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 0,
        duration: 500
      }).start(() => {
        setAnimation(new Animated.Value(0));
        setFadeAnim(new Animated.Value(1));
        setStartAnim(false)
      });
    });
  };

  
  return (
    <SafeAreaView edges={['top']} style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <Title />
        <GameAvatars players={players} />
        <EmojisBar animatedEmoji={animatedEmoji} gameId={gameId} userId={currentUserId} setAnimatedEmoji={setAnimatedEmoji} setStartAnim={setStartAnim} startAnim={startAnim}  />
       {startAnim &&  <Animated.View style={[animationStyles, {opacity: fadeAnim}]}>
          <AnimatedEmoji style={[styles.emoji,]} source={animatedEmoji} />
        </Animated.View>}
      </ScrollView>
    </SafeAreaView>
  );
};


