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
import WriteReview from '../screens/main/WriteReview';
import Profile from '../screens/main/Profile';
import Name from '../screens/main/Name';
import Gender from '../screens/main/Gender';
import PhoneNumber from '../screens/main/PhoneNumber';
import ChangePassword from '../screens/main/ChangePassword';

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
          <Stack.Screen name={stackName.writeReview} component={WriteReview} />
          <Stack.Screen name={stackName.profile} component={Profile} />
          <Stack.Screen name={stackName.name} component={Name} />
          <Stack.Screen name={stackName.gender} component={Gender} />
          <Stack.Screen name={stackName.phone} component={PhoneNumber} />
          <Stack.Screen
            name={stackName.changePass}
            component={ChangePassword}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigation;
