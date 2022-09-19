import React, { useEffect, useState } from "react";
import { Image, View, Easing, } from "react-native";

import styles from "../styles/styles";



const AnimatedEmoji = (props) => {

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const source = props.source;
    const [yOffset, setYOffset] = useState(0);
    const [opacity, setOpacity] = useState(20);
    const [startTime] = useState(Date.now());




    useEffect(() => {

        let id = props.activeAnimatedEmoji.forEach(() => {
            setInterval(() => {
                let elapsedMs = Date.now() - startTime;
                let t = clamp(elapsedMs / 2500, 0, 1);
                setYOffset(Easing.ease(t) * -300);
                setOpacity(1.0 - Easing.circle(t));
     
            }, 10);
        })
       
        
        return () => {

            console.log("KILL", id);
            clearInterval(id);
            props.setActiveAnimatedEmoji((state) => [...state])

        };
        
    }, [startTime]);

    // props.setActiveAnimatedEmoji((emojis) => emojis.filter((_, index) => index !== 0));
    
      const handleRemoveItem = () => {
        
        const temp = [...props.activeAnimatedEmoji];

        temp.splice(0, 1);

        props.setActiveAnimatedEmoji(temp);
    }
   
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
                    },
                ],
            },
        ]}>
            <Image style={styles.emoji} source={source} />
        </View>
    );
};

export default AnimatedEmoji;