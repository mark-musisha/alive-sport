import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Typography } from '../../../config/global';

export const SocialButton = ({
  iconColor,
  name,
  children,
  buttonStyle,
  onPress,
}) => {
  return (
    <Icon.Button
      name={name}
      style={[styles.button, buttonStyle]}
      borderRadius={32}
      color={iconColor}
      onPress={onPress}>
      {children}
    </Icon.Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryBlue,
    width: 263,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
