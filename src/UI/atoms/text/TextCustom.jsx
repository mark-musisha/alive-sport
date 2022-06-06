import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Typography } from '../../../config/global';

export const TextCustom = ({ textStyle, children }) => {
  return <Text style={[styles.defaultStyle, textStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: Typography.body.body02,
    fontWeight: Typography.body.weight,
    color: Colors.primaryWhite,
  },
});
