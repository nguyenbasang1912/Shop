import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Input from './src/components/Input';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <View
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Input/>
      </View>
  );
};

export default App;
