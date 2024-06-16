import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { stackName } from './routeName';
import Register from '../screens/auth/Register';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
          <Stack.Screen name={stackName.login} component={Login} />
          <Stack.Screen name={stackName.register} component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigation;
