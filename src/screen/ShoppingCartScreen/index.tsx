import { View,Text,FlatList,ActivityIndicator,ScrollView} from 'react-native';
import React,{useState,useEffect} from 'react'; 
import CartProductItem from '../../components/CartProductitem/index';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import {DataStore, Auth} from 'aws-amplify';
import {Product,CastProduct} from '../../models';



export default function ShoppingCartScreen () { 
  const [cartProducts, setCartProducts] = useState<CastProduct[]>([]);

  const navigation = useNavigation();

  const fetchCartProducts = async () => {
    const userData = await Auth.currentAuthenticatedUser();
    // TODO query only my cart items
    DataStore.query(CastProduct, cp =>
      cp.userSub('eq', userData.attributes.sub),
    ).then(setCartProducts);
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    if (cartProducts.filter(cp => !cp.product).length === 0) {
      return;
    }
    const fetchProducts = async () => {
      // query all products that are used in cart
      const products = await Promise.all(
        cartProducts.map(cartProduct =>
          DataStore.query(Product, cartProduct.productID),
        ),
      );

      // assign the products to the cart items
      setCartProducts(currentCartProducts =>
        currentCartProducts.map(cartProduct => ({
        ...cartProduct,
        product: products.find(p => p.id === cartProduct.productID),
        })),
      );
    };

    fetchProducts();
  }, [cartProducts]);

  useEffect(() => {
    const subscription = DataStore.observe(CastProduct).subscribe(msg =>
      fetchCartProducts(),
    );
    return subscription.unsubscribe;
  }, []);

  useEffect(() => {
    const subscriptions = cartProducts.map(cp =>
      DataStore.observe(CastProduct, cp.id).subscribe(msg => {
        if (msg.opType === 'UPDATE') {
          setCartProducts(curCartProducts =>
            curCartProducts.map(cp => {
              if (cp.id !== msg.element.id) {
                console.log('differnt id');
                return cp;
              }
              return {
                ...cp,
                ...msg.element,
              };
            }),
          );
        }
      }),
    );

    return () => {
      subscriptions.forEach(sub => sub.unsubscribe());
    };
  }, [cartProducts]);

  const totalPrice = cartProducts.reduce(
    (summedPrice, product) =>
      summedPrice + (product?.product?.price || 0) * product.quantity,
    0,
  );

  const onCheckout = () => {99
    navigation.navigate('AddressScreen', {totalPrice});
  };

  const deleteItem = async() =>{
    const userData = await Auth.currentAuthenticatedUser();
    const cartItems = await DataStore.query(CastProduct, cp =>
      cp.userSub('eq', userData.attributes.sub),
    );
    await Promise.all(cartItems.map(cartItem => DataStore.delete(cartItem)));
    setAuthUserId();
  };

  if (cartProducts.filter(cp => !cp.product).length !== 0) {
    return <ActivityIndicator />;
  }
  if( cartProducts.length===0){
    return (
    <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
      <View style={{margin:10 }}>
        <Text style={{fontSize:20,textAlign:'center'}}>Please Add to CartItem</Text>
      </View>
     <View style={{margin:10,marginTop:10,width:200}}>
        <Button text={'Click here'} onPress={() =>{navigation.navigate('Home')}}/>
     </View>
   </View>
    )
    
  }
   
    const setAuthUserId = async () => {
      const userInfo = await Auth.currentUserInfo();
      const id = userInfo.username;
      // console.log(id);    
  }
      

  return (  
    <ScrollView style={{margin:10}}>  
        <FlatList
         data={cartProducts}
         renderItem={({item}) => <CartProductItem cartItem={item} />}
         ListHeaderComponent={()=>
         <View>
         <Text style={{fontSize: 18}}>
              Subtotal ({cartProducts.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
         <Button text={'Proceed to checkout'} 
                onPress={onCheckout}/>
         </View>
        }
        />
       <Button text={'Delete All CartProduct'} 
                onPress={deleteItem}/>
    </ScrollView>
  );
}