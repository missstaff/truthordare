import React from "react";
import { Image, View } from "react-native";

import styles from "../styles/styles";


const AnimatedEmoji = (props) => {
    const source = props.source;

    return (
        <View style={{alignItems: "center", justifyContent: "center", position: "relative", bottom:25}}>
            <Image style={[styles.emoji, {position: "absolute"}]} source={source} />
        </View>
        
      );
};

export default AnimatedEmoji;