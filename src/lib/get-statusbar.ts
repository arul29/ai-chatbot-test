import {Platform, Dimensions, StatusBar} from 'react-native';

/**
 * Gets the StatusBar height on iOS (including Dynamic Island & Notch).
 * @returns StatusBar height in pixels.
 */
export const getStatusBarHeight = (): number => {
  if (Platform.OS === 'ios') {
    const {height, width} = Dimensions.get('window');

    // Detect iPhone with Dynamic Island / Notch
    const hasNotch = height >= 812 || width >= 812;

    return hasNotch ? 44 : 20; // iPhone with a notch: 44px, without a notch: 20px
  }

  return 0; // Android
};
