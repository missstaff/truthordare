import { Animated, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Animation = (props) => {

  return (
    <Animated.View>
      <Image style={props.style} source={props.emoji} />
    </Animated.View>
  )
}
export default Animation

const styles = StyleSheet.create({})