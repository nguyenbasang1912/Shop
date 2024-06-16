import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import TestButton from './src/example/TestButton';
import RootNavigation from './src/navigator/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    // console.log(getLanguage());
  }, []);

  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
