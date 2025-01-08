import React, {useState} from 'react';
import SplashScreen from './src/screens/splash-screen';
import Home from './src/screens/home';
import {Text} from 'react-native';

const App = () => {
  const [activeScreen, setActiveScreen] = useState('Splash');

  if (activeScreen === 'Splash') {
    return <SplashScreen setActiveScreen={setActiveScreen} />;
  }
  if (activeScreen === 'Home') {
    return <Home />;
  }
  return <Text>Not Found</Text>;
};

export default App;
