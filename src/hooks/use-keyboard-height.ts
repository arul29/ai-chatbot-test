import {useState, useEffect} from 'react';
import {Platform, Keyboard} from 'react-native';

const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      const keyboardWillShowListener = Keyboard.addListener(
        'keyboardWillShow',
        e => {
          setKeyboardHeight(e.endCoordinates.height);
        },
      );
      const keyboardWillHideListener = Keyboard.addListener(
        'keyboardWillHide',
        () => {
          setKeyboardHeight(0);
        },
      );

      return () => {
        keyboardWillShowListener.remove();
        keyboardWillHideListener.remove();
      };
    }
    return undefined;
  }, []);

  return keyboardHeight;
};

export default useKeyboardHeight;
