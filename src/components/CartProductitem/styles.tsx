import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({

 page :{
     padding:10,
     margin:1,
     backgroundColor:'#fff',
     bordercolor:'#d1d1d1',
     borderWidth:1,
     borderRadius:5,

 },
 root:{
   flexDirection:'row',
},
 image:{ 
    flex:2,
    height:110,
    resizeMode:'contain',
    borderRadius:5,
    margin:1,
 },
 titlec:{
     padding:10,
     flex:3, 
 },
 title:{
   fontSize:18,
   //color:'white'
},
ratingscon:{
   
},
 price:{
    fontSize:18,
    fontWeight:'bold',
    //color: 'white'
 },
 quantity:{
    margin:1,
    paddingTop:10,
    flexDirection:'row',

 },
 delete:{ 
   marginLeft:150,
   padding:10,
   textAlign:'center',
   borderRadius:5,
   borderColor:'#d1d1d1',
   borderWidth:3,
 },

});
export default styles;