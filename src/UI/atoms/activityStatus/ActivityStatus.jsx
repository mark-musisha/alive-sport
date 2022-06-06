import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../../../config/global';

export default function ActivityStatus({ customInnerStyle, customOuterStyle }) {
  return (
    <View style={[styles.outer, customOuterStyle]}>
      <View style={[styles.inner, customInnerStyle]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    height: 52,
    width: 52,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.primaryWhite,
    backgroundColor: Colors.tertiaryGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    height: 24,
    width: 24,
    backgroundColor: Colors.primaryWhite,
    borderRadius: 100,
  },
});
