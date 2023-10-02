import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

page:{
  padding:11,
  bordercolor:'black',

},
 root :{
     flexDirection:'row',
     margin:1,
     backgroundColor:'#fff',
     bordercolor:'#d1d1d1',
     borderWidth:1,
     borderRadius:5,

 },
 image:{ 
    flex:2,
    height:110,
    resizeMode:'contain',
    borderRadius:5
 },
 titlec:{
     padding:10,
     flex:3, 
 },
 title:{
   fontSize:18,
   // color:'white'
},
ratingscon:{
   
},
 price:{
    fontSize:18,
    fontWeight:'bold',
    color: 'red'
 },

});
export default styles;