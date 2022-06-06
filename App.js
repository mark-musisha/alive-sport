import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, Typography } from './src/config/global';
import { Splash } from './src/screens/onboarding/Splash';
import { Signin } from './src/screens/authentication/Sign';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Splash /> */}
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryGrey,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  submitButton: {},
  socialButton: {
    color: Colors.primaryWhite,
    fontSize: Typography.body.body01,
    fontWeight: Typography.value01.weight,
  },
  customCard: {
    width: 263,
    height: 263,
  },
});
