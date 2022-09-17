import React, { useEffect, useState} from "react";
import { Image, View, Easing, } from "react-native";

import styles from "../styles/styles";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const AnimatedEmoji = (props) => {

    console.log("PROPS", props.activeAnimatedEmoji)
  const source = props.source;
  const [ yOffset, setYOffset ] = useState(0);
  const [ opacity, setOpacity ] = useState(20);
  const [startTime] = useState(Date.now());

   
  useEffect(() => {
   
    let id = setInterval(() => {
        var elapsedMs = Date.now() - startTime;
        var t = clamp(elapsedMs / 5000, 0, 1);
        setYOffset(Easing.ease(t) * -800);
        setOpacity(1.0 - Easing.circle(t)); 
    }, 500);
   
    return () => {
        
      console.log("KILL", id);
      clearInterval(id);
    }; 
  }, [startTime]);

  

    return (
        <View style={[
            {
                alignItems: "center",
                justifyContent: "center",
                bottom: 80,
            },
            {
                opacity: opacity,
                transform: [
                    {
                    translateY: yOffset
                    }
                ]
            }
        ]}>
            <Image style={styles.emoji} source={source} />
        </View>
    );
};

export default AnimatedEmoji;