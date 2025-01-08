import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Keyboard,
  Image,
} from 'react-native';
import {wp} from '../../lib/responsive-screen';

interface TypingComponentProps {
  onSend: (message: string) => void;
}

const TypingComponent: React.FC<TypingComponentProps> = ({onSend}) => {
  const [message, setMessage] = useState<string>('');

  const handleSend = () => {
    if (message.trim().length > 0) {
      onSend(message);
      setMessage('');
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#999"
          multiline
          // maxHeight={wp(25)} // Max 4 lines approximately
          // onSubmitEditing={handleSend}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSend}
          disabled={message.trim().length === 0}>
          <Image
            source={require('./../../assets/send.png')}
            style={[
              styles.sendIcon,
              {tintColor: message.trim().length > 0 ? '#007AFF' : '#999'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    backgroundColor: '#FFF',
    paddingVertical: Platform.OS === 'ios' ? wp(4) : wp(2),
    paddingHorizontal: wp(4),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -wp(0.5),
        },
        shadowOpacity: 0.1,
        shadowRadius: wp(1),
      },
      android: {
        elevation: 5,
      },
    }),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: wp(5),
    paddingHorizontal: wp(3),
    paddingVertical: wp(2),
  },
  input: {
    flex: 1,
    fontSize: wp(4),
    color: '#000',
    maxHeight: wp(25),
    paddingTop: Platform.OS === 'ios' ? wp(2) : wp(1),
    paddingBottom: Platform.OS === 'ios' ? wp(2) : wp(1),
    paddingRight: wp(2),
  },
  sendButton: {
    // paddingBottom: Platform.OS === 'ios' ? wp(2) : wp(1),
    paddingLeft: wp(2),
    justifyContent: 'center',
  },
  sendIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: 'contain',
  },
});

export default TypingComponent;
