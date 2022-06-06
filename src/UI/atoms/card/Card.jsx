import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../config/global';

export const Card = ({ cardStyle, children }) => {
  return <View style={[styles.card, cardStyle]}> {children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.primaryGrey,
    width: 327,
    height: 175,
  },
});
