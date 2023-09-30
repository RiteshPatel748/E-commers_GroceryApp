import React,{useState} from 'react';
import { Text,Image, View, Pressable } from 'react-native'; 
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import {CastProduct} from '../../models';
import {DataStore} from 'aws-amplify';

  interface CartProductItemProps {
    cartItem: CastProduct;
  }
  
  const CartProductItem = ({cartItem}: CartProductItemProps) => {

    console.log(cartItem);
    const {product, ...cartProduct} = cartItem;
  
    const updateQuantity = async (newQuantity: number) => {
      const original = await DataStore.query(CastProduct, cartProduct.id);
  
      await DataStore.save(
        CastProduct.copyOf(original, updated => {
          updated.quantity = newQuantity;
        }),
      );
    };
    
    const deleteItem = async() =>{
      const todelete = await DataStore.query(CastProduct,cartProduct.id);
      DataStore.delete(todelete); 
    };
  
    return (
    <View style={styles.page}>
     
      <View style={styles.root}>
        <Image style={styles.image} 
          source={{uri:product.image}}/>
          <View style={styles.titlec}>
            <Text style={styles.title} numberOfLines={3}> {product.title}</Text>
          
            <Text style={styles.price}>from ${product.price.toFixed(2)}</Text>
          </View>    
      </View>
      <View style={styles.quantity}>
      <QuantitySelector
          quantity={cartProduct.quantity}
          setQuantity={updateQuantity}
        />
        <Pressable  onPress={deleteItem} style={styles.delete}><Text>Delete</Text></Pressable>
      </View>
    </View>
    );

}
export default CartProductItem;