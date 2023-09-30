/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme,} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports'
import '@azure/core-asynciterator-polyfill'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import UserScreen from './src/screen/UserScreen/UserScreen';
import ShoppingCartStack from './src/router/ShoopingCartStack';
import AddProduct from './src/screen/AddProduct/AddProduct';
import HomeStack from './src/router/HomeStack';
import { withAuthenticator} from 'aws-amplify-react-native';

const Tab = createBottomTabNavigator();
Amplify.configure(awsconfig)

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <NavigationContainer>
          <Tab.Navigator
          screenOptions={{
            headerShown: false,
            // tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: "#e47911",
          }}
          >
          <Tab.Screen
            component={HomeStack}
            name="Home"
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="home" color={color} size={29} />
              ),
            }}
          />
          <Tab.Screen
            component={UserScreen}
            name="User"
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="user" color={color} size={30}  />
              ),
            }}
          />
          <Tab.Screen
            component={ShoppingCartStack}
            name="Shopping"
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="shopping-cart" color={color} size={30}  />
              ),
            }}
          />
          <Tab.Screen
            component={AddProduct}
            name="More"
            options={{
              tabBarIcon: ({color}) => (
                <Entypo name="menu" color={color} size={30}  />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const signUpConfig = {
  defaultCountryCode: '+91',
};

export default withAuthenticator(App ,{usernameAttributes: 'phone_number',signUpConfig});
