import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Typography } from '../../../config/global';
import { TextCustom } from '../text/TextCustom';

export default function Input({ customStyle, placeholder = '' }) {
  return (
    // <View style={styles.container}>
    <TextInput
      style={[styles.container, customStyle]}
      placeholder={placeholder}
    />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 327,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primaryWhite,
    paddingRight: 20,
    paddingHorizontal: 20,
    fontSize: Typography.body.body01,
    color: Colors.primaryWhite,
  },
  input: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    borderWidth: 0,
    paddingHorizontal: 20,
  },
  textButton: {
    color: Colors.primaryGold,
  },
});
