import React, {  useEffect, useState } from 'react'
import { Text, View ,SafeAreaView,TextInput, ScrollView, FlatList, Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Productscreen from '../screen/Productscreen';
import Feather from 'react-native-vector-icons/Feather';
import Homescreen from '../screen/HomeScreen/HomeScreen';
import { Product } from '../models';
import Productitem from '../components/Productitem';
import { DataStore } from 'aws-amplify';


const Stack = createStackNavigator();


  const HeaderComponent =()=> {
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
      if(searchValue!=''){
        DataStore.query(Product,cp=>cp.title.contains(searchValue)).then(setProducts);
      }
    },[searchValue])
    return (
      <SafeAreaView style={{backgroundColor: '#22e3dd',height:searchValue?'100%':80,}}>
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
            style={{height: 40, marginLeft: 10,width:'100%'}}
            placeholder="Search..."
            value={searchValue}
            onChangeText={setSearchValue}
          />
        </View>
          {searchValue&&
          <ScrollView style={{marginBottom:0,backgroundColor:'#000',}}>
          <FlatList
            data={products}
            renderItem={({item}) => <Productitem data1={item}/>}
            showsVerticalScrollIndicator={false}
             maxToRenderPerBatch={1}
             initialNumToRender={2}
             windowSize={2}
          />
          </ScrollView>}
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