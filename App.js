import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Input from './src/components/Input';
import LearnFormik from './src/example/LearnFormik';
import TestButton from './src/example/TestButton';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <TestButton/>
  );
};

export default App;
