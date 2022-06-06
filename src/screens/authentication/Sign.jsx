import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Colors, Typography } from '../../config/global';
import { SocialButton } from '../../UI/atoms';
import { TextCustom } from '../../UI/atoms/text/TextCustom';

export const Signin = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.screen}
        source={require('../../assets/images/signin.png')}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}>
        <View style={styles.layout}>
          <View style={styles.textContainer}>
            <TextCustom textStyle={styles.logo}>FULLY ALIVE</TextCustom>
            <TextCustom textStyle={styles.text}>SUIT UP</TextCustom>
            <TextCustom textStyle={styles.text}>&</TextCustom>
            <TextCustom textStyle={styles.text}>START RUNNING</TextCustom>
          </View>
          <View style={styles.buttonContainer}>
            <SocialButton
              buttonStyle={styles.googleButton}
              iconColor={Colors.primaryRed}
              name='google'>
              <TextCustom textStyle={styles.textStyle}>
                SIGN IN WITH GOOGLE
              </TextCustom>
            </SocialButton>

            <SocialButton
              buttonStyle={styles.fbButton}
              iconColor={Colors.primaryWhite}
              name='facebook'>
              <TextCustom textStyle={styles.textStylefb}>
                SIGN IN WITH FACEBOOK
              </TextCustom>
            </SocialButton>
          </View>
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
  layout: {
    flex: 1,
    paddingTop: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  logo: {
    fontSize: 48,
    fontWeight: Typography.title.weight,
  },
  text: {
    fontSize: Typography.title.title02,
    fontWeight: Typography.title.weight,
    color: Colors.primaryGreen,
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    marginBottom: 50,
  },
  googleButton: {
    backgroundColor: Colors.primaryWhite,
  },
  fbButton: {
    backgroundColor: Colors.primaryBlue,
  },
  textStyle: {
    color: Colors.primaryGrey,
    fontWeight: Typography.title.weight,
  },
  textStylefb: {
    color: Colors.primaryWhite,
    fontWeight: Typography.title.weight,
  },
});
