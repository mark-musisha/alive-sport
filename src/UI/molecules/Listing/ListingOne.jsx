import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from '../../atoms/card/Card';
import { TextCustom } from '../../atoms/text/TextCustom';
import { Typography } from '../../../config/global';

export default function ListingOne() {
  return (
    <Card cardStyle={styles.container}>
      <TextCustom textStyle={styles.text}>Last Name</TextCustom>
      <TextCustom textStyle={styles.text}>Tan</TextCustom>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    height: 65,
    width: 375,
    justifyContent: 'space-between',
  },

  text: {
    fontSize: Typography.body.body01,
  },
});
