import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/main/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import {Keyboard, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CText from '../components/CText';
import CButton from '../components/CButton';
import {colors} from '../utils/styles';
import {useEffect, useState} from 'react';

const Tab = createBottomTabNavigator();

const icons = ['home', 'search1', 'shoppingcart', 'gift', 'profile'];

const Explore = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Explore</Text>
    </View>
  );
};

const Cart = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Cart</Text>
    </View>
  );
};

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
};

const Offer = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Offer</Text>
    </View>
  );
};

const TabBarCustom = ({state, descriptors, navigation}) => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    const subcribeKeyboardShow = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardShow(true),
    );
    const subcribeKeyboardDismiss = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardShow(false),
    );

    return () => {
      subcribeKeyboardShow.remove();
      subcribeKeyboardDismiss.remove();
    };
  }, []);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.light,
        backgroundColor: colors.white,
        display: isKeyboardShow ? 'none' : 'flex',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <CButton key={index.toString()} onPress={onPress} style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
              <Icon
                size={24}
                name={icons[index]}
                color={isFocused ? colors.primary : colors.grey}
              />
              <CText
                type={isFocused ? 'button' : 'common'}
                color={isFocused ? colors.primary : colors.grey}>
                {label}
              </CText>
            </View>
          </CButton>
        );
      })}
    </View>
  );
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      tabBar={props => <TabBarCustom {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Offer" component={Offer} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
