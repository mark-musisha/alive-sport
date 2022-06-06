import { StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../../config/global';
import { LinearGradient } from 'expo-linear-gradient';

export default function FixCard({ customStyles, children }) {
  return (
    <LinearGradient
      colors={[
        'rgba(22,22,22,0.8)',
        'rgba(22,22,22,0.95)',
        'rgba(22,22,22,0.98)',
        'rgba(22,22,22,1)',
      ]}
      style={[styles.container, customStyles]}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryWhite,
    width: 375,
    height: 96,
    paddingHorizontal: 56,
    paddingTop: 16,
  },
});
