import React, { useState } from 'react'
import { Alert, Text, TextInput, View,ScrollView } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import Button from '../../components/Button';
import {Order, OrderProduct, CastProduct} from '../../models';
import {Auth, DataStore} from 'aws-amplify';
import {useNavigation, useRoute} from '@react-navigation/native';

export default AddressScreen = ()=> {
    const [country, setcountry]=useState('India');
    const [fullname,setfullname]=useState('');
    const [phone,setphone]=useState('');
    const [address,setaddress]=useState('');
    const [addresserror,setaddresserror]=useState('');
    const [city ,setcity]=useState('');
    const [zip ,setzip]=useState('');
    const [state ,setState]=useState('');

    const [check,setcheck]=useState(false);
    const navigation = useNavigation();


    console.log(fullname);
    console.log(address);
    const onCheckout=()=>{
        if(!fullname)
        {Alert.alert('Enter fullname'); return;}
        if(!phone)
        {Alert.alert('Enter phone'); return;}
        if(!city)
        {Alert.alert('Enter city'); return;}
        if(!zip)
        {Alert.alert('Enter zip'); return;}
        if(!state)
        {Alert.alert('Enter state'); return;}
        if(!address)
        {Alert.alert('Enter address'); return;}
        console.warn('Checkout')
        saveOrder();
       
    }
    const saveOrder = async () => {
        // get user details
        const userData = await Auth.currentAuthenticatedUser();
        // create a new order
        const newOrder = await DataStore.save(
          new Order({
            userSub: userData.attributes.sub,
            fullName: fullname,
            phoneNumber: phone,
            country,
            city,
            address,
          }),
        );
         // fetch all cart items
       const cartItems = await DataStore.query(CastProduct, cp =>
        cp.userSub('eq', userData.attributes.sub),
      );
       // attach all cart items to the order
       await Promise.all(
        cartItems.map(cartItem =>
          DataStore.save(
            new OrderProduct({
              quantity: cartItem.quantity,
              option: cartItem.option,
              productID: cartItem.productID,
              orderID: newOrder.id,
            }),
          ),
        ),
      );
      // delete all cart items
        await Promise.all(cartItems.map(cartItem => DataStore.delete(cartItem)));

        // redirect home
        navigation.goBack();
        navigation.navigate('Homescreen');
    }
  
    return (
      <View style={styles.root}>
       <Text style={ {fontSize: 30,fontWeight: 'bold',textAlign:'center',marginBottom:'20%'}}>Address</Text>
       {/*country*/}   
       <View style={styles.row}>
         <Picker selectedValue={country}
                 onValueChange={setcountry}>
                <Picker.Item label={`India`} value={`India`} />
         </Picker>
       </View> 

       {/*Full name*/}
       <View >
           <Text style={styles.label}>Full name(First and Last name)</Text>
           <TextInput style={styles.input} value={fullname} onChangeText={setfullname}/>
       </View>

       {/*Phone Number*/}
       <View >
           <Text style={styles.label}>Phone number</Text>
           <TextInput style={styles.input}
            value={phone} onChangeText={setphone}
            keyboardType={'phone-pad'}/>
       </View>

       {/*Address*/}
       <View >
           <Text style={styles.label}>Address</Text>
           <TextInput style={styles.address} placeholder="Street address or P.O. Box"
            value={address} onChangeText={setaddress}/>
       </View>

       {/*City*/}
       <View >
           <Text style={styles.label}>City</Text>
           <TextInput style={styles.input} value={city} onChangeText={setcity}/>
       </View>
        {/*State*/}
        
       <View style={styles.statecont}>
       <View>
       <Text style={styles.label}>State</Text>
        <View style={styles.state}>
         <Picker selectedValue={state}
          // style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            setState(itemValue)
          }>
             <Picker.Item label='Select' />
             <Picker.Item label='Bihar' />
             <Picker.Item label='Chhattisgarh' />
             <Picker.Item label='Karnataka' />
             <Picker.Item label='Madhya Pradesh' />
             <Picker.Item label='Maharashtra' />
             <Picker.Item label='Goa' />
             <Picker.Item label='Gujarat' />
             <Picker.Item label='Uttar Pradesh' />
         </Picker>
        </View>
        </View>
        <View style={[styles.zip,]}>
        <Text style={styles.label}>ZIP Code</Text>
        <TextInput style={styles.state} 
            value={zip} onChangeText={setzip} keyboardType='number-pad'/>
        </View>
        </View>
        <Button text="Checkout" onPress={onCheckout} />
        
      </View>
    )
}
