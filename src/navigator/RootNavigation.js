import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import { stackName } from './routeName';
import Register from '../screens/auth/Register';
import Home from '../screens/main/Home';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'}/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={stackName.login}>
          <Stack.Screen name={stackName.login} component={Login} />
          <Stack.Screen name={stackName.register} component={Register} />
          <Stack.Screen name={stackName.home} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigation;
