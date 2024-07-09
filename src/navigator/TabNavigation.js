import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {CButton, CText} from '../components';
import {Account, Cart, Explore, Home} from '../screens/tab';
import {colors, containerAttr} from '../utils/styles';

const Tab = createBottomTabNavigator();

const icons = ['home', 'search1', 'shoppingcart', 'gift', 'profile'];

const Offer = props => {
  console.log(props);
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
      style={[
        styles.tabBar,
        {
          display: isKeyboardShow ? 'none' : 'flex',
        },
      ]}>
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
          <CButton
            key={index.toString()}
            onPress={onPress}
            style={containerAttr.flex}>
            <View style={styles.center}>
              <Icon
                size={24}
                name={icons[index]}
                color={isFocused ? colors.primary : colors.grey}
              />
              <CText
                numLine={1}
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
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.light,
    backgroundColor: colors.white,
  },
});
