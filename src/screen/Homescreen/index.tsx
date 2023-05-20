import { View,FlatList, StyleSheet} from 'react-native';
import React,{useEffect,useState} from 'react'; 
import Productitem from '../../components/Productitem/index';
import { DataStore } from 'aws-amplify';
import { Product }   from '../../models'

export default function Homescreen () {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);


  return (
    <View style={styles.page}> 
        <FlatList
        data={products}
        renderItem={({item})=><Productitem data1={item}/>}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

