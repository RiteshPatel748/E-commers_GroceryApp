import React from 'react';
import { Text,Image, View ,Pressable} from 'react-native'; 
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
//import { FontAwesome } from 'react-native-vector-icon/FontAwesome';


export default function Productitem(props) {
  const {title,image,price,id}=props.data1;

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProductDetails',{id:id});
  };

    return (
    <Pressable onPress={onPress} style={styles.page}>
      <View style={styles.root}>
        <Image style={styles.image} 
          source={{uri:image}}/>
          <View style={styles.titlec}>
            <Text style={styles.title} numberOfLines={3}> {title}</Text>
            <View>
            
            </View>
            <Text style={styles.price}>from ${price.toFixed(2)}</Text>
          </View>
      </View>
    </Pressable>
    );

}
