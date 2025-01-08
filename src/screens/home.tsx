import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Platform,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import ChatBubble from '../components/chat-ai/chat-bubble';
import {wp} from '../lib/responsive-screen';
import TypingComponent from '../components/chat-ai/typing-component';
import TypingIndicator from '../components/chat-ai/typing-indicator';
import Header from '../components/header';
import useKeyboardHeight from '../hooks/use-keyboard-height';
import {getStatusBarHeight} from '../lib/get-statusbar';
import {chatMessages, dummyResponses} from '../data';

interface ChatMessage {
  message: string;
  isUser: boolean;
  avatar?: any;
  timestamp: string;
  id?: string;
}

// const COLOR_GRAY_LIGHTEST = '#F5F5F5';
const COLOR_WHITE = '#FFFFFF';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    chatMessages.map((msg, index) => ({
      ...msg,
      id: `msg-${index}`,
    })),
  );
  const [loading, setLoading] = useState<boolean>(false);
  const flatListRef = useRef<FlatList>(null);

  const scrollToBottom = (): void => {
    if (flatListRef.current) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({animated: true});
      }, 100);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  const findBestResponse = (userMessage: string): string | null => {
    const lowercaseMessage = userMessage.toLowerCase();

    for (let item of dummyResponses) {
      if (item.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
        return item.responses[
          Math.floor(Math.random() * item.responses.length)
        ];
      }
    }

    if (lowercaseMessage.includes('?')) {
      return 'Pertanyaan yang bagus! Bisa Anda jelaskan lebih detail?';
    }

    return null;
  };

  const handleSend = (message: string) => {
    console.log('Sending message:', message);
    const newUserMessage: ChatMessage = {
      message,
      isUser: true,
      timestamp: getCurrentTime(),
      id: `msg-${messages.length}`,
    };

    const newChat = [...messages, newUserMessage];
    setMessages(newChat);
    setLoading(true);

    const matchedResponse = findBestResponse(message);

    setTimeout(() => {
      const botResponse: ChatMessage = {
        message: matchedResponse || 'Maaf, saya tidak mengerti. Bisa diulang?',
        isUser: false,
        timestamp: getCurrentTime(),
        // avatar: require('./../../assets/chat-bot-3.png'),
        id: `msg-${newChat.length}`,
      };

      setMessages([...newChat, botResponse]);
      setLoading(false);
    }, 2000);
  };

  const renderItem: ListRenderItem<ChatMessage> = ({item, index}) => (
    <View style={{marginBottom: index + 1 === messages.length ? wp(3) : 0}}>
      <ChatBubble
        message={item.message}
        isUser={item.isUser}
        avatar={item.avatar}
        timestamp={item.timestamp}
      />
    </View>
  );

  const renderLoader = () => {
    if (loading) {
      return (
        <View style={{marginBottom: wp(3)}}>
          <ChatBubble
            message={<TypingIndicator />}
            isUser={false}
            avatar={messages[0]?.avatar}
            timestamp={getCurrentTime()}
          />
        </View>
      );
    }
    return null;
  };

  const statusBarHeight = getStatusBarHeight();
  const keyboardHeight = useKeyboardHeight();

  return (
    <View style={[styles.container, {paddingTop: statusBarHeight}]}>
      <Header title="Chat Bot AI" subtitle="Dapatkan bantuan dari AI kami" />
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id!}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={renderLoader}
        // onContentSizeChange={scrollToBottom}
        // onLayout={scrollToBottom}
      />
      <TypingComponent onSend={handleSend} />
      {Platform.OS === 'ios' ? (
        <View style={{marginBottom: keyboardHeight}} />
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  contentContainer: {
    paddingHorizontal: wp(6),
    backgroundColor: COLOR_WHITE,
    minHeight: '100%',
    paddingTop: wp(6),
  },
});
