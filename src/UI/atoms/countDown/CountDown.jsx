import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Colors, Typography } from '../../../config/global';

export default function CountDown({ duration, size, isPlaying = true }) {
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={duration}
      size={size}
      strokeWidth={4}
      colors={[isPlaying ? Colors.primaryGreen : Colors.primaryRed]}
      style={styles.countDown}>
      {({ remainingTime }) => <Text style={styles.text}>{remainingTime}s</Text>}
    </CountdownCircleTimer>
  );
}

const styles = StyleSheet.create({
  countDown: {},
  text: {
    color: Colors.primaryWhite,
    fontSize: Typography.value01.size,
    fontWeight: Typography.value01.weight,
  },
});
