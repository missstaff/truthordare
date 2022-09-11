import React, { Component, useEffect } from 'react';
import { AnimatedEmoji } from 'react-native-animated-emoji';
import {
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';



// emoji component with correct emoji?
const randomEmojis = [
  'heart_eyes', 'purple_heart', 'fire', 'clap',
  'joy', 'open_mouth',
];


const WINDOW_HEIGHT = Dimensions.get('window').height;
const EMOJI_AMOUNT = 20;

export default class Animation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojiArray: []
    };

    this._emojis = {};
    this.emojiIndex = 0;
  }

  componentDidMount() {
    /**
     * Generate `EMOJI_AMOUNT` emojis for initial rendering
     */
    for (let i = 0; i < EMOJI_AMOUNT; i++) {
      this.generateEmoji();
    }
  }

  /**
   * Function to generate emoji
   */
  generateEmoji = () => {
    const { emojiArray } = this.state;
    const newEmojis = Object.assign(emojiArray, []);

    let index = Math.floor(Math.random() * Math.floor(6));
    const emoji = {
      key: this.emojiIndex,
      name: randomEmojis[index],
      size: Math.floor(Math.random() * Math.floor(20)) + 20,
      duration: Math.floor(Math.random() * Math.floor(6000)) + 2000,
      yPosition: 50 + Math.random() * (WINDOW_HEIGHT - 60)
    };
    newEmojis.push(emoji);
    this.emojiIndex += 1;

    this.setState({ emojiArray: newEmojis });
  };

  /**
   * Animation completion callback
   * @param index
   */
  onAnimationCompleted = (index) => {
    const { emojiArray } = this.state;
    let newEmojis = Object.assign(emojiArray, []);
    newEmojis = newEmojis.filter(e => e.key !== index);
    this.setState({ emojiArray: newEmojis }, () => this.generateEmoji());
  };

  render() {
    let emojiComponents = this.state.emojiArray.map((emoji) => {
      return (
        <AnimatedEmoji
          key={emoji.key}
          index={emoji.key}
          ref={ref => this._emojis[emoji.key] = ref}
          style={{ bottom: emoji.yPosition }}
          name={emoji.name}
          size={emoji.size}
          duration={emoji.duration}
          onAnimationCompleted={this.onAnimationCompleted}
        />
      )
    });

    return (
      <View style={styles.container}>
        {emojiComponents}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});