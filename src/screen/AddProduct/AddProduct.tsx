import React, { Component,useState } from 'react'
import { Text, View,Image,StyleSheet,TextInput,KeyboardAvoidingView,Platform,ScrollView,Alert } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';
import Button from '../../components/Button';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as ImagePicker from "react-native-image-picker"
import { DataStore } from 'aws-amplify';
import {Product} from '../../models';
Amplify.configure({
  Storage: {
      AWSS3: {
          bucket: 'amazonapp-storage-ca75fe54195025-dev', //REQUIRED -  Amazon S3 bucket name
          region: 'ap-south-1', //OPTIONAL -  Amazon service region
      }
  }
});

// const Root = createStackNavigator()

const AddProduct = () => {
  const [uri,seturi]=useState('\\')
  const [filename,setfilename]=useState('')
  const [title,settitle]=useState('');
  const [description,setdescription]=useState('');
  const [quantity,setquantity]=useState('');
  const [price,setprice]=useState('');
  const [options,setoptions]=useState('');
  const [photo,setphoto]=useState('')

//   console.log(description)

const handleChoosePhoto = ()=> {
  const options = {
    noData:true,
  };
  
  ImagePicker.launchImageLibrary (options, async (response) => {
    console.log(response);
    
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {

      setfilename (response.assets[0].fileName);
      seturi (response.assets[0].uri);
      setphoto(uri);      
         
         
    }
  }
  );
}
const Upload= async()=>{
  if (!price || !title || !filename || !quantity || !description || !options) {
    Alert.alert('Please Enter All field');
    return;
  }

  const responses = await fetch(uri);
          const blob = await responses.blob();
          const result =await Storage.put(filename, blob, {
            contentType: "image/jpeg", // contentType is optional
          });
          const signedURL = await Storage.get(result.key);

   
  const resultp =await DataStore.save(
    new Product({
      title:title,
      description: description,
      image: signedURL,
      images:[signedURL],
      quantity:[quantity],
      price:Number(price),
      options:[options],
    })
  );
  if (!result) {
    Alert.alert('Please Enter Price');
    return;
  }
//console.log(resultp);
console.warn('Successfull Upload');

}

// const Signout = ()=>{
  //console.log(photo);
    return(
      <View>
          {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -100 : 0}> */}
        <ScrollView> 
          <Button text={'Sign Out'} onPress={()=>{Auth.signOut()}} />
          <View style={{margin:8,flexDirection:'row',}}>
            <Button text="Choose Photo" onPress={handleChoosePhoto} containerStyles={{
              marginTop:60,
              backgroundColor: 'blue', 
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'blue',}} />
            <Image
            source={{uri: uri}}
            style={{width: 150,
            height: 150,
            borderColor: 'black',
            borderWidth: 1,
            marginHorizontal: 3,
            marginLeft:50,
            }}/>
          </View>
          <View>
          <TextInput style={styles.input} placeholder='Enter title' value={title}  onChangeText={settitle} />
          </View>
          <View>
          <TextInput style={styles.input} placeholder='Enter description' value={description} onChangeText={setdescription} />
          <TextInput style={styles.input} placeholder='Enter quantity' value={quantity} onChangeText={setquantity} />
          <TextInput style={styles.input} placeholder='Enter price' value={price} onChangeText={setprice} />
          <TextInput style={styles.input} placeholder='Enter options' value={options} onChangeText={setoptions} />
          <Button text={'Upload Product'} onPress={Upload} />
          </View>
        </ScrollView>
        {/* </KeyboardAvoidingView> */}
      </View>
)}


  
//     return (
           
//               <Root.Navigator >
//                   <Root.Screen name="SignOut" component={Signout} />   
//               </Root.Navigator>       
            
//   );
// };
const styles=StyleSheet.create({
  input:{
    backgroundColor:'white',
    padding:10,
    marginVertical:5,
    borderRadius:5,
},
})
export default AddProduct;