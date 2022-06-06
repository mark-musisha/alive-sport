import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Colors, Typography } from '../../../config/global';

export const Button = ({ customStyles, children, onPress, icon = null }) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.buttonLabel]}> {children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGreen,
    width: 263,
    height: 40,
    alignContent: 'center',
    paddingVertical: 8,
    borderRadius: 28,
  },
  buttonLabel: {
    color: Colors.secondaryGrey,
    textAlign: 'center',
    fontWeight: Typography.title.weight,
    fontSize: Typography.title.title02,
  },
});
