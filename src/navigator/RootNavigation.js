import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Register } from '../screens/auth';
import {
  Address,
  ChangeEmail,
  ChangePassword,
  Checkout,
  Detail,
  Favorite,
  Gender,
  Name,
  Order,
  OrderSuccess,
  PhoneNumber,
  Profile,
  Review,
  Search,
  SeeMore,
  WriteReview,
} from '../screens/main';
import { getMe } from '../store/thunk/auth';
import TabNavigation from './TabNavigation';
import { stackName } from './routeName';
import NewAddress from '../screens/main/NewAddress';

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef(null);

function RootNavigation() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const getInitRoute = () => {
    if (auth.status.isLoggedIn) {
      return stackName.tab;
    }
    return stackName.login;
  };

  useEffect(() => {
    if (auth.status.isLoggedIn) {
      dispatch(getMe());
    }
  }, []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={getInitRoute()}>
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
          <Stack.Screen name={stackName.seeMore} component={SeeMore} />
          <Stack.Screen
            name={stackName.changePass}
            component={ChangePassword}
          />
          <Stack.Screen name={stackName.changeEmail} component={ChangeEmail} />
          <Stack.Screen name={stackName.search} component={Search} />
          <Stack.Screen name={stackName.address} component={Address} />
          <Stack.Screen name={stackName.order} component={Order} />
          <Stack.Screen name={stackName.checkout} component={Checkout} />
          <Stack.Screen name={stackName.orderSuccess} component={OrderSuccess} />
          <Stack.Screen name={stackName.newAddress} component={NewAddress} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default RootNavigation;
