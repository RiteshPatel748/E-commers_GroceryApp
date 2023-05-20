import React ,{useState,useEffect} from 'react'
import { Text,ScrollView,ActivityIndicator } from 'react-native'
import styles from './styles';
import { useRoute,useNavigation } from '@react-navigation/native'; 
import {Picker} from '@react-native-picker/picker';

import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {DataStore, Auth} from 'aws-amplify';
import {Product,CastProduct} from '../../models';


export default function Productscreen(){ 
  const [product, setProduct] =  useState<Product | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined,);
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => { 
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setSelectedOption(product.options[0]);
    }
  }, [product]);

  const onAddToCart = async () => {
    const userData = await Auth.currentAuthenticatedUser();

    if (!product || !userData) {
      return;
    }

      const newCartProduct = new CastProduct({
      userSub: userData.attributes.sub,
      quantity,
      option: selectedOption,
      productID: product.id,
      castProductProductId:'',
    });

    await DataStore.save(newCartProduct);
    navigation.navigate('Shopping');
  };

   
   if (!product) {
    return <ActivityIndicator />;
  }

    return (
      <ScrollView style={styles.root}>
        {/*1. Title*/}
        <Text style={styles.title}>{product.title}</Text>

        {/*2. Image Carousel*/}
        <ImageCarousel images={product.images} />


        {/*3. Option selector*/}
        <Picker selectedValue={selectedOption}
                 onValueChange={itemValue => setSelectedOption(itemValue)}>
                {product.options.map(option =>(
                <Picker.Item label={option} value={option} />))}
        </Picker>


        {/*4. Price*/}
        <Text style={styles.price}>from ${product.price.toFixed(2)}</Text>
     

        {/*5. Description*/}
        <Text style={styles.desc}> {product.description} </Text>


        {/*6. Quantity Selector*/}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />


        {/*7. Buttons*/}
        <Button
        text={'Add To Cart'}
        onPress={onAddToCart}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
      </ScrollView>
    );
  };