import React, {  useState } from 'react'
import { Text, View ,SafeAreaView,TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import Homescreen from '../screen/Homescreen';
import Productscreen from '../screen/Productscreen';
import Feather from 'react-native-vector-icons/Feather';


const Stack = createStackNavigator();


  const HeaderComponent =()=> {
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);

    return (
      <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
        <View
          style={{
            margin: 10,
            padding: 5,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather name="search" size={20} />
          <TextInput
            style={{height: 40, marginLeft: 10}}
            placeholder="Search..."
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
      </SafeAreaView>
    );
  };
  

const HomeStack = ()=>{
    const [searchValue, setSearchValue] = useState('');
    return (
            
              <Stack.Navigator  screenOptions={{
                header: () => (
                  <HeaderComponent
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    
                  />
                ),
              }}>
                  <Stack.Screen name="Homescreen" 
                  component={Homescreen} /> 
                  <Stack.Screen name="ProductDetails" 
                  component={Productscreen} />   
              </Stack.Navigator>       
            
  );
};
export default HomeStack ;