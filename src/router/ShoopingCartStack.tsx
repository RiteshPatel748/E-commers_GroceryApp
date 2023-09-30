import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from '../screen/ShoppingCartScreen';
import AddressScreen from '../screen/AddressScreen'; 


const Stack = createStackNavigator();

const ShoppingCartStack = ()=>{
    return (
            
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="ShoppingCart"
                   component={ShoppingCartScreen} /> 
                  <Stack.Screen name="AddressScreen" 
                  component={AddressScreen} />   
              </Stack.Navigator>       
            
  );
};
export default ShoppingCartStack;