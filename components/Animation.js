// import React, { useRef, useState } from "react";
// import { Animated, Image, TouchableOpacity } from "react-native";

// import styles from "../styles/styles";


// const Animation = (props) => {
//   const [animation, setAnimation] = useState(new Animated.Value(0));
//   const [fadeAnim, setFadeAnim] = useState(useRef(new Animated.Value(1)).current);



//   const animationStyles = {
//     transform: [
//       {
//         translateY: animation,
//       },
//     ],
//   };

//   const startAnimation = () => {
//     Animated.timing(animation, {
//       useNativeDriver: true,
//       toValue: -300,
//       duration: 1000,
//     }).start(() => {
//       Animated.timing(fadeAnim, {
//         useNativeDriver: true,
//         toValue: 0,
//         duration: 500
//       }).start(() => {
//         setAnimation(new Animated.Value(0));
//         setFadeAnim(new Animated.Value(1));
//       });
//     });
//   };

//   return (
//     <Animated.View style={{opacity: fadeAnim}}>
//     <Image style={[styles.emoji]} source={props.emojiUri} />
//   </Animated.View>
//     // <TouchableOpacity style={animationStyles} onPress={() => [startAnimation(animation, setAnimation, fadeAnim, setFadeAnim)]}>
     
//     // </TouchableOpacity>
//   );
// };

// export default Animation;