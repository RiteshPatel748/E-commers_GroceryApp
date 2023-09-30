import React, {useState } from 'react'
import { Text, View,Image,StyleSheet,TextInput,ScrollView,Alert } from 'react-native'
import Button from '../../components/Button';
import { Storage } from 'aws-amplify';
import * as ImagePicker from "react-native-image-picker"
import { DataStore } from 'aws-amplify';
import {Product} from '../../models';

const AddProduct = () => {
  const [uri,seturi]=useState('')
  const [filename,setfilename]=useState('')
  const [title,settitle]=useState('');
  const [description,setdescription]=useState('');
  const [quantity,setquantity]=useState('');
  const [price,setprice]=useState('');
  const [options,setoptions]=useState('');
  const [photo,setphoto]=useState('')
  const [Check,setCheck]=useState(false)

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
setCheck(true)
  const responses = await fetch(uri);

          const blob = await responses.blob();
          const result =await Storage.put(filename, blob, {
            contentType: "image/jpeg", // contentType is optional
          });
          const now = Date.now();
          const  expires = 60*24*60*6
          const signedURL = await Storage.get(result.key, {
            expires:expires,
          });

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
  console.warn('Successfull Upload');
  setdescription('')
  setfilename('')
  setphoto('')
  setoptions('')
  setquantity('')
  settitle('')
  setprice('')
  seturi('')
  setCheck(false)
}

if(Check)
{
  return(<View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
  <Text style={{fontSize:25,textAlign:'center',textAlignVertical:'center',fontWeight:'bold'}}>Loading.....</Text>
  </View>)
}
    return(
      <View style={{padding:20}}>
        <ScrollView> 
          <View style={{margin:8,justifyContent:'center',alignItems:'center'}}>
            {!uri?(<Button text="Choose Photo" onPress={handleChoosePhoto} containerStyles={{
              marginTop:60,
              backgroundColor: 'blue', 
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'blue',
              paddingHorizontal:20,

            }} />):
            (<Image
            source={{uri: uri}}
            style={{
              width:'100%',
              height:250,
              borderColor: 'black',
              borderWidth: 1,
              borderRadius:10,
              marginHorizontal: 10,
            }}/>)}
          </View>
          <View>
          <TextInput style={styles.input} placeholder='Enter title' value={title}  onChangeText={settitle} />
          </View>
          <View>
          <TextInput style={styles.input} placeholder='Enter description' value={description} onChangeText={setdescription} />
          <TextInput style={styles.input} placeholder='Enter quantity' value={quantity} onChangeText={setquantity} />
          <TextInput style={styles.input} keyboardType='number-pad' placeholder='Enter price' value={price} onChangeText={setprice} />
          <TextInput style={styles.input} placeholder='Enter options' value={options} onChangeText={setoptions} />
          <Button text={'Upload Product'} onPress={Upload} />
          </View>
        </ScrollView>
      </View>
)}
const styles=StyleSheet.create({
  input:{
    backgroundColor:'white',
    padding:10,
    marginVertical:5,
    borderRadius:5,
},
})
export default AddProduct;