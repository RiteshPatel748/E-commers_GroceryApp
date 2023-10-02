import React from 'react';
import { Text,Image, View ,TouchableOpacity} from 'react-native'; 
import styles from './styles';
import { useNavigation } from '@react-navigation/native';


export default function Productitem(props) {
  const {title,image,price,id,description}=props.data1;

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProductDetails',{id:id});
  };

    return (
    <TouchableOpacity onPress={onPress} style={styles.page}>
      <View style={styles.root}>
        <Image style={styles.image} 
          source={{uri:image}}/>
          <View style={styles.titlec}>
            <Text style={styles.title} numberOfLines={1}> {title}</Text>
            <Text style={styles.price}>from ${price.toFixed(2)}</Text>
            <Text style={styles.title} numberOfLines={1}> {description}</Text>
          </View>
      </View>
    </TouchableOpacity>
    );

}
