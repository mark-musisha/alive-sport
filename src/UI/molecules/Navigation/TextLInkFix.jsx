import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TextCustom } from '../../atoms/text/TextCustom';
import FixCard from '../../atoms/fixCard/FixCard';
import { Colors, Typography } from '../../../config/global';

export default function TextLInkFix() {
  return (
    <FixCard customStyles={styles.container}>
      <TextCustom textStyle={styles.firstRow}>
        Need Some Inspiration?
      </TextCustom>
      <TextCustom textStyle={styles.secondRow}>Connect to Music App</TextCustom>
    </FixCard>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  firstRow: {
    fontWeight: Typography.title.weight,
    fontSize: Typography.title.title02,
  },
  secondRow: {
    fontWeight: Typography.body.weight,
    fontSize: Typography.body.body01,
    color: Colors.primaryYellow,
    textDecorationLine: 'underline',
  },
});
