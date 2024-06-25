import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import Detail from '../screens/main/Detail';
import Favorite from '../screens/main/Favorite';
import Review from '../screens/main/Review';
import TabNavigation from './TabNavigation';
import {stackName} from './routeName';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={stackName.login}>
          <Stack.Screen name={stackName.login} component={Login} />
          <Stack.Screen name={stackName.register} component={Register} />
          <Stack.Screen name={stackName.tab} component={TabNavigation} />
          <Stack.Screen name={stackName.detail} component={Detail} />
          <Stack.Screen name={stackName.favorite} component={Favorite} />
          <Stack.Screen name={stackName.review} component={Review} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigation;
