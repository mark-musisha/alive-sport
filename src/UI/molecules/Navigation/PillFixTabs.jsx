import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FixCard from '../../atoms/fixCard/FixCard';
import { TextCustom } from '../../atoms/text/TextCustom';
import { Colors, Typography } from '../../../config/global';

export default function PillFixTabs() {
  return (
    <FixCard customStyles={styles.card}>
      <TextCustom textStyle={[styles.text, styles.textLeft]}>
        Distance
      </TextCustom>
      <TextCustom textStyle={[styles.text]}>Duration</TextCustom>
      <TextCustom textStyle={[styles.text, styles.textRight]}>
        Activity
      </TextCustom>
    </FixCard>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: 33,
    width: 327,
    backgroundColor: Colors.primaryGrey,
    paddingHorizontal: 0,
    paddingTop: 0,
    borderRadius: 16,
  },
  textLeft: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  text: {
    flex: 1,
    backgroundColor: Colors.primaryYellow,
    color: Colors.primaryGrey,
    fontSize: Typography.body.body02,
    fontWeight: Typography.title.weight,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 109,
    height: 33,
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.tertiaryGrey,
  },
  textRight: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});
