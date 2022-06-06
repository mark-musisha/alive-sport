import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FixCard from '../../atoms/fixCard/FixCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../../config/global';
import { TextCustom } from '../../atoms/text/TextCustom';

export default function BottomNav() {
  return (
    <FixCard customStyles={styles.container}>
      <View>
        <Icon name='home' size={50} color='grey' />
        <TextCustom>Discover</TextCustom>
      </View>
      <View>
        <Icon name='home' size={50} color='grey' />
        <TextCustom>Discover</TextCustom>
      </View>
      <View>
        <Icon name='home' size={50} color='grey' />
        <TextCustom>Discover</TextCustom>
      </View>
      <View>
        <Icon name='home' size={50} color='grey' />
        <TextCustom>Discover</TextCustom>
      </View>
      <View>
        <Icon name='home' size={50} color='grey' />
        <TextCustom>Discover</TextCustom>
      </View>
    </FixCard>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryGrey,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
  },
});
