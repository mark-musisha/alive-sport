import { View, Text } from 'react-native';
import React from 'react';

export default function NavItem({ icon, navLabel }) {
  return (
    <View>
      {icon}
      <TextCustom>{navLabel}</TextCustom>
    </View>
  );
}
