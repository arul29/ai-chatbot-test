import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Platform, FlatList, StyleSheet} from 'react-native';
import {OPENAI_API_KEY} from '@env';
import Axios from 'axios';
import ChatBubble from '../components/chat-ai/chat-bubble';
import TypingComponent from '../components/chat-ai/typing-component';
import TypingIndicator from '../components/chat-ai/typing-indicator';
import Header from '../components/header';
import useKeyboardHeight from '../hooks/use-keyboard-height';
import {wp} from '../lib/responsive-screen';
import {getStatusBarHeight} from '../lib/get-statusbar';
import {initialSystemPrompt} from '../constants/chat';
import TextFormatter from '../components/text-formatter';

interface ChatMessage {
  message: string;
  isUser: boolean;
  timestamp: string;
  id?: string;
}
// console.log('API', OPENAI_API_KEY);

// const COLOR_GRAY_LIGHTEST = '#F5F5F5';
const COLOR_WHITE = '#FFFFFF';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
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

  const fetchOpenAIResponse = async (chatHistory: ChatMessage[]) => {
    try {
      const formattedMessages = [
        {
          role: 'system',
          content: initialSystemPrompt,
        },
        ...chatHistory.map(msg => ({
          role: msg.isUser ? 'user' : 'assistant',
          content: msg.message,
        })),
      ];

      const response = await Axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: formattedMessages,
          temperature: 0.7,
          // max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        },
      );

      return (
        response.data.choices?.[0]?.message?.content ||
        'Maaf, saya tidak mengerti.'
      );
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      return 'Terjadi kesalahan. Silakan coba lagi.';
    }
  };

  const handleSend = async (message: string) => {
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

    const botMessage = await fetchOpenAIResponse(newChat);

    const botResponse: ChatMessage = {
      message: botMessage,
      isUser: false,
      timestamp: getCurrentTime(),
      id: `msg-${newChat.length}`,
    };

    setMessages([...newChat, botResponse]);
    setLoading(false);
  };

  const renderItem = ({item, index}: {item: ChatMessage; index: number}) => (
    <View style={{marginBottom: index + 1 === messages.length ? wp(3) : 0}}>
      <ChatBubble
        message={<TextFormatter text={item.message} isUser={item.isUser} />}
        isUser={item.isUser}
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
            timestamp={getCurrentTime()}
          />
        </View>
      );
    }
    return null;
  };

  const renderEmpty = useCallback(
    () => (
      <ChatBubble
        message="Mulai percakapan dengan AI kami!"
        isUser={false}
        timestamp={getCurrentTime()}
      />
    ),
    [],
  );

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
        ListEmptyComponent={renderEmpty}
        onLayout={scrollToBottom}
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
