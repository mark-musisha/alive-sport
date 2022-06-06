import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from '../../atoms/card/Card';
import { TextCustom } from '../../atoms/text/TextCustom';
import { Typography } from '../../../config/global';

export default function NotificationsListing() {
  return (
    <Card cardStyle={styles.container}>
      <TextCustom textStyle={styles.text}>Notifications</TextCustom>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: 65,
    width: 375,
    justifyContent: 'center',
  },

  text: {
    fontSize: Typography.body.body01,
  },
});
