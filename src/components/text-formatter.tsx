import React from 'react';
import {Text, Linking, StyleSheet, TextStyle} from 'react-native';

// Interface for the component's props
interface TextFormatterProps {
  text: string;
  style?: TextStyle;
  isUser?: boolean;
}

// Interface for text parts (text or URL)
interface Part {
  type: 'text' | 'url';
  content: string;
  url?: string;
}

const TextFormatter: React.FC<TextFormatterProps> = ({text, style, isUser}) => {
  // Regex to detect regular URLs and markdown-style URLs
  const urlRegex = /(https?:\/\/[^\s]+)|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

  // Parse text into an array of text and URL parts
  const parseText = (inputText: string): Part[] => {
    const parts: Part[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    // Iterate through all URL matches in the text
    while ((match = urlRegex.exec(inputText)) !== null) {
      // Add text before the URL match
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: inputText.slice(lastIndex, match.index),
        });
      }

      if (match[1]) {
        // Regular URL
        parts.push({
          type: 'url',
          content: match[1],
          url: match[1],
        });
      } else {
        // Markdown-style URL
        parts.push({
          type: 'url',
          content: match[2], // Displayed text
          url: match[3], // Actual URL
        });
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text after the last match
    if (lastIndex < inputText.length) {
      parts.push({
        type: 'text',
        content: inputText.slice(lastIndex),
      });
    }

    return parts;
  };

  // Handler to open URLs
  const handlePress = async (url: string) => {
    try {
      // Check if the URL can be opened
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        // Open the URL
        await Linking.openURL(url);
      } else {
        console.warn(`Don't know how to open URL: ${url}`);
      }
    } catch (error) {
      console.error(`Error opening URL: ${error}`);
    }
  };

  // Parse the input text
  const parts = parseText(text);

  return (
    <Text style={style}>
      {parts.map((part, index) => {
        if (part.type === 'url') {
          // Render clickable URL
          return (
            <Text
              key={index}
              style={[styles.link, isUser ? styles.userLink : styles.botLink]}
              onPress={() => handlePress(part.url!)}>
              {part.content}
            </Text>
          );
        }
        // Render regular text
        return <Text key={index}>{part.content}</Text>;
      })}
    </Text>
  );
};

// Styles for different types of links
const styles = StyleSheet.create({
  link: {
    color: '#2980b9',
    textDecorationLine: 'underline',
  },
  userLink: {
    color: '#E0E0E0',
  },
  botLink: {
    color: '#2980b9',
  },
});

export default TextFormatter;
