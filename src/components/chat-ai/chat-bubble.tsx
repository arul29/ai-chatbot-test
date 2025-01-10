import React, {useRef, useEffect, useState, ReactNode} from 'react';
import {View, Text, StyleSheet, Animated, Image} from 'react-native';
import {wp} from '../../lib/responsive-screen';

interface ChatBubbleProps {
  message: ReactNode;
  isUser: boolean;
  timestamp: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isUser,
  timestamp,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(wp(12))).current;
  const [textWidth, setTextWidth] = useState(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 6,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        isUser ? styles.userBubble : styles.botBubble,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateX: slideAnim,
            },
          ],
        },
      ]}>
      {/* {!isUser && (
        <View style={styles.avatarContainer}>
          <Image
            source={require('./../../assets/chatgpt.png')}
            style={styles.avatar}
          />
        </View>
      )} */}

      <View style={styles.messageContainer}>
        <Text
          onTextLayout={e => {
            setTextWidth(e.nativeEvent.lines[0].width);
          }}
          style={[
            styles.messageText,
            isUser ? styles.userText : styles.botText,
            {width: 'auto'},
          ]}>
          {message}
        </Text>

        <Text
          style={[
            styles.timestampText,
            {alignSelf: textWidth < wp(30) ? 'flex-start' : 'flex-end'},
          ]}>
          {timestamp}
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: wp(3),
    maxWidth: wp(80),
    minWidth: wp(20),
    alignSelf: 'flex-start',
    borderRadius: wp(4),
    padding: wp(3),
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: wp(0.5)},
    // shadowOpacity: 0.1,
    // shadowRadius: wp(1),
    // elevation: 1,
  },
  userBubble: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
    borderBottomRightRadius: wp(1),
  },
  botBubble: {
    backgroundColor: '#F2F2F7',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: wp(1),
  },
  messageContainer: {
    flexShrink: 1,
    alignItems: 'flex-start',
  },
  messageText: {
    fontSize: wp(4),
    // fontWeight: ',
    flexWrap: 'wrap',
  },
  userText: {
    color: '#FFFFFF',
  },
  botText: {
    color: '#000000',
  },
  timestampText: {
    fontSize: wp(2.5),
    color: 'rgba(0,0,0,0.5)',
    marginTop: wp(1),
  },
});

export default React.memo(ChatBubble);
