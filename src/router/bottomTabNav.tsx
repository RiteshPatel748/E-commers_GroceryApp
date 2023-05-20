import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screen/Homescreen';
import AddressScreen from '../screen/AddressScreen'
import Entypo from 'react-native-vector-icons/Entypo';
import ShoppingCartStack from './ShoopingCartStack';
import HomeStack from './HomeStack';
import SignOUt from './SignOut';
import AddProduct from '../screen/AddProduct/AddProduct';


const Tab = createBottomTabNavigator();

const BottomTabNav = ()=>{
    return (
            
              <Tab.Navigator screenOptions={{headerShown: false}} >
                  <Tab.Screen name="Home" component={HomeStack}
                    options={{
                    tabBarIcon: ({color}) => (
                      <Entypo name="home" color={color} size={25} />
                    ),
                  }} />

                  <Tab.Screen name="Menu" component={AddProduct}
                   options={{
                    tabBarIcon: ({color}) => (
                      <Entypo name="user" color={color} size={25} />)
                    }}/>

                  <Tab.Screen name="Shopping" component={ShoppingCartStack}
                   options={{
                    tabBarIcon: ({color}) => (
                      <Entypo name="shopping-cart" color={color} size={25} />
                    ),
                  }}/>

                  <Tab.Screen name="Address" component={AddressScreen} 
                  options={{
                   tabBarIcon: ({color}) => (
                  <Entypo name="menu" color={color} size={25} />),
                  }} />  

              </Tab.Navigator>       
            
  );
};
export default BottomTabNav;