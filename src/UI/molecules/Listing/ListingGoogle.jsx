import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Card } from '../../atoms/card/Card';
import { TextCustom } from '../../atoms/text/TextCustom';
import { Typography } from '../../../config/global';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ListingGoogle() {
  return (
    <Card cardStyle={styles.container}>
      <View style={styles.logoLabelContainer}>
        <Icon name='google' size={50} color='red' />
        <TextCustom>Google</TextCustom>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    height: 72,
    width: 375,
    justifyContent: 'space-between',
  },
  logoLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  text: {
    fontSize: Typography.body.body01,
  },
});
