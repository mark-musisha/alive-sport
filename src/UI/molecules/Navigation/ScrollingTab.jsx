import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FixCard from '../../atoms/fixCard/FixCard';
import { TextCustom } from '../../atoms/text/TextCustom';
import { Colors, Typography } from '../../../config/global';

export default function ScrollingTab() {
  return (
    <FixCard customStyles={styles.card}>
      <TextCustom textStyle={styles.text}>THIS MONTH</TextCustom>
      <TextCustom textStyle={styles.text}>LAST MONTH</TextCustom>
    </FixCard>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 49,
    width: 257,
    flexDirection: 'row',
    backgroundColor: Colors.primaryGrey,
    paddingHorizontal: 0,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: Typography.body.body01,
    fontWeight: Typography.title.weight,
    color: Colors.primaryYellow,
  },
});
