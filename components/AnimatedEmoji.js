import React, { useEffect, useRef, useState } from "react";
import { Image, View, Easing, } from "react-native";

import styles from "../styles/styles";



const AnimatedEmoji = (props) => {

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

    const source = props.source;
    const [yOffset, setYOffset] = useState(0);
    const [xOffset, setXOffset] = useState(0)
    const [opacity, setOpacity] = useState(20);
    const [startTime] = useState(Date.now());
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
       
        setXOffset(Math.floor(Math.random() * 300) + 1);
        
        let id = setInterval(() => {

            let elapsedMs = Date.now() - startTime;
            let t = clamp(elapsedMs / 1500, 0, 1);

            setYOffset(Easing.circle(t) * -300);
            setOpacity(1.0 - Easing.circle(1 - Math.sqrt(1 - Math.pow(t, 2))));

            if(t == 1) {
                clearInterval(id);
                setIsDone(true);
            }

        }, 10);   
    
       
        return () => {
            console.log("KILL", id);
            clearInterval(id);
        };

    }, [startTime]);

    if(isDone) return <></>;

    return (
        <View style={[{
                bottom: 80,
                position: "absolute",
                opacity: opacity,
                transform: [
                    {
                        translateY: yOffset,
                    },
                    {
                        translateX: xOffset
                    }
                ],
            },
        ]}>
            <Image style={styles.emoji} source={source} />
        </View>
    );
};

export default AnimatedEmoji;