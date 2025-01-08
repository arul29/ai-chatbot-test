import React, {useEffect, useRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Easing,
  ImageStyle,
  TextStyle,
  StyleProp,
} from 'react-native';
import {wp} from '../lib/responsive-screen';

interface SplashScreenProps {
  setActiveScreen: (screen: string) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({setActiveScreen}) => {
  // Initialize animation values
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Run parallel animations with initial delay to keep the image static at start
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 2, // Final size of the scaled logo
        duration: 1000, // Scale animation duration
        delay: 0, // Add 500ms delay for initial static display
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(opacityValue, {
        toValue: 0, // Fade out completely
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start(() => {
      // Set active screen to 'Home' after animation
      setActiveScreen('Home');
    });
  }, [scaleValue, opacityValue, setActiveScreen]);

  // Combine scale and opacity animations
  const animatedStyle: StyleProp<ImageStyle & TextStyle> = {
    transform: [{scale: scaleValue}],
    opacity: opacityValue,
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyle]}>
        ChatBot AI
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4f0fe',
  },
  logo: {
    width: wp(35),
    height: wp(35),
  },
  text: {
    marginTop: wp(1),
    fontSize: wp(5),
    fontWeight: '900',
    fontStyle: 'normal',
    color: '#000',
  },
});

export default SplashScreen;
