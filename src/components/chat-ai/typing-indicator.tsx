import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet} from 'react-native';
import {wp} from '../../lib/responsive-screen';

const TypingIndicator: React.FC = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateDot = (dot: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(dot, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.delay(300),
        ]),
      ).start();
    };

    animateDot(dot1, 0);
    setTimeout(() => animateDot(dot2, 300), 300);
    setTimeout(() => animateDot(dot3, 600), 600);
  }, [dot1, dot2, dot3]);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.dot, {opacity: dot1}]}>•</Animated.Text>
      <Animated.Text style={[styles.dot, {opacity: dot2}]}>•</Animated.Text>
      <Animated.Text style={[styles.dot, {opacity: dot3}]}>•</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#F2F2F7',
    paddingVertical: wp(2),
    paddingHorizontal: wp(3),
    borderRadius: wp(3),
    maxWidth: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    fontSize: wp(5),
    color: '#555',
    marginHorizontal: wp(0.5),
  },
});

export default TypingIndicator;
