import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Provider as ReduxProvider} from 'react-redux';
import RootNavigation from './src/navigator/RootNavigation';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    // console.log(getLanguage());
  }, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
