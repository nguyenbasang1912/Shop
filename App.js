import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Provider as ReduxProvider} from 'react-redux';
import RootNavigation from './src/navigator/RootNavigation';
import {store} from './src/store/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    // console.log(getLanguage());
  }, []);

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
