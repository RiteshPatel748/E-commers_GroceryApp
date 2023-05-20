import { ImageBackground, StyleSheet } from "react-native";

const styles=StyleSheet.create({
root:{
    padding:10,
    alignSelf:"center"
},
row:{
 backgroundColor:'white',
},
label:{
fontWeight:'bold',
fontSize:18,
},
input:{
    backgroundColor:'white',
    padding:10,
    marginVertical:5,
    borderRadius:5,
},
address:{
    backgroundColor:'white',
    padding:6,
    margin:1
},
statecont:{
    flexDirection:'row',
},

state:{ 
  width:155,
  borderColor:'white',
  backgroundColor:'white',
  borderRadius:5
},
zip:{
    marginLeft:25
},

})
export default styles;