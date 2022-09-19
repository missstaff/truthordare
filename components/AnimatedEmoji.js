import React, { useEffect, useState } from "react";
import { Dimensions, Image, View, Easing, } from "react-native";

import styles from "../styles/styles";



const AnimatedEmoji = (props) => {
    console.log("props", props.activeAnimatedEmoji)
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    const windowWidth = Dimensions.get('window').width;
    const source = props.source;
    const [yOffset, setYOffset] = useState(0);
    const [xOffset, setXOffset] = useState(0)
    const [opacity, setOpacity] = useState(20);
    const [startTime] = useState(Date.now());


    useEffect(() => {
        setXOffset(Math.floor(Math.random() * 300) + 1);
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
        };
        
    }, [startTime]);

    // useEffect(() => {
    //     if(yOffset < -299){
    //         handleRemoveItem()
    //     }
    // }, [yOffset])
    // console.log("YO", yOffset)
    // props.setActiveAnimatedEmoji((emojis) => emojis.filter((_, index) => index !== 0));
    
      const handleRemoveItem = () => {
        
        const temp = [...props.activeAnimatedEmoji];

        temp.splice(0, 1);

        props.setActiveAnimatedEmoji(temp);
    }
   
    return (
        <View style={[
            {
                bottom: 80,
                position: "absolute",
                opacity: opacity,
                transform: [
                    {
                        translateY: yOffset
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