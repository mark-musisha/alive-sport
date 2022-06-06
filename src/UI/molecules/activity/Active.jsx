import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ActivityStatus from '../../atoms/activityStatus/ActivityStatus';
import { Colors } from '../../../config/global';

export default function Active() {
  return (
    <>
      <ActivityStatus
        customInnerStyle={styles.inner}
        customOuterStyle={styles.outer}
      />
    </>
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
    backgroundColor: 'maroon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    height: 24,
    width: 24,
    backgroundColor: Colors.primaryRed,
    borderColor: Colors.primaryWhite,
    borderWidth: 2,
    borderRadius: 100,
  },
});
