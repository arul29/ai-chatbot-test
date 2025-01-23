import React from 'react';
import {Text, View, StyleSheet, ScrollView, Linking} from 'react-native';
import {wp} from '../lib/responsive-screen';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({content}) => {
  const processText = (text: string) => {
    let segments: JSX.Element[] = [];
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\[.*?\]\(.*?\))/g);

    parts.forEach((part, index) => {
      if (part === '') return;

      // Handle bold text
      if (part.startsWith('**') && part.endsWith('**')) {
        segments.push(
          <Text key={index} style={styles.bold}>
            {part.slice(2, -2)}
          </Text>,
        );
      }
      // Handle italic text
      else if (part.startsWith('*') && part.endsWith('*')) {
        segments.push(
          <Text key={index} style={styles.italic}>
            {part.slice(1, -1)}
          </Text>,
        );
      }
      // Handle inline code
      else if (part.startsWith('`') && part.endsWith('`')) {
        segments.push(
          <Text key={index} style={styles.code}>
            {part.slice(1, -1)}
          </Text>,
        );
      }
      // Handle links [text](url)
      else if (
        part.startsWith('[') &&
        part.includes('](') &&
        part.endsWith(')')
      ) {
        const text = part.slice(1, part.indexOf(']'));
        const url = part.slice(part.indexOf('(') + 1, -1);
        segments.push(
          <Text
            key={index}
            style={styles.link}
            onPress={() => Linking.openURL(url)}>
            {text}
          </Text>,
        );
      }
      // Regular text
      else {
        segments.push(
          <Text key={index} style={styles.regular}>
            {part}
          </Text>,
        );
      }
    });

    return segments;
  };

  const renderLines = () => {
    return content.split('\n').map((line, index) => {
      // Handle headers
      if (line.startsWith('# ')) {
        return (
          <Text key={index} style={styles.h1}>
            {line.slice(2)}
          </Text>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <Text key={index} style={styles.h2}>
            {line.slice(3)}
          </Text>
        );
      }
      // Handle regular lines with possible inline formatting
      return (
        <Text key={index} style={styles.paragraph}>
          {processText(line)}
        </Text>
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>{renderLines()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: wp(0),
  },
  regular: {
    fontSize: wp(4),
    color: '#333',
  },
  bold: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#333',
  },
  italic: {
    fontSize: wp(4),
    fontStyle: 'italic',
    color: '#333',
  },
  code: {
    fontSize: wp(4),
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 4,
    color: '#333',
  },
  link: {
    fontSize: wp(4),
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  h1: {
    fontSize: wp(6),
    fontWeight: 'bold',
    marginVertical: wp(2),
    color: '#333',
  },
  h2: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginVertical: wp(2),
    color: '#333',
  },
  paragraph: {
    marginVertical: wp(1),
  },
});

export default MarkdownRenderer;
