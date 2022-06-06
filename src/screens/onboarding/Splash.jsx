import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { Colors, Typography } from '../../config/global';
import { TextCustom } from '../../UI/atoms/text/TextCustom';

export const Splash = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.screen}
        source={require('../../assets/images/background.png')}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}>
        <View>
          <TextCustom textStyle={styles.text}>Test you muscle</TextCustom>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    opacity: 1,
  },
  overlayImage: {
    opacity: 1,
  },
  text: {
    fontFamily: 'arlow Semi Condensed',
    fontSize: 48,
    fontWeight: Typography.title.weight,
    color: Colors.primaryGreen,
  },
});
