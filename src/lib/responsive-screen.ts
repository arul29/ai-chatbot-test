import {Dimensions, ScaledSize} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

Dimensions.addEventListener('change', ({window}: {window: ScaledSize}) => {
  screenWidth = window.width;
  screenHeight = window.height;
});

export const wp = (widthPercent: number): number => {
  const elemWidth =
    typeof widthPercent === 'number'
      ? widthPercent
      : parseFloat(widthPercent as unknown as string);
  return (screenWidth * elemWidth) / 100;
};

export const hp = (heightPercent: number): number => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent as unknown as string);
  return (screenHeight * elemHeight) / 100;
};
