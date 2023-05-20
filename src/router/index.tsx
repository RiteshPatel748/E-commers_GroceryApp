import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';


const Root = createStackNavigator();

const Router = ()=>{
    return (
            <NavigationContainer>
              <Root.Navigator screenOptions={{headerShown: false}}>
                  <Root.Screen name="HomeBottom" component={BottomTabNav} />   
              </Root.Navigator>       
            </NavigationContainer>
  );
};
export default Router;