import { Auth } from 'aws-amplify';
import React, { useEffect } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import Button from '../../components/Button';

const UserScreen = () => {
  const [name, setName] = React.useState('');
  const [phoneNumbers, setPhoneNumbers] = React.useState('');
  const [emailId, setEmailId] = React.useState('');

  const fetch=async()=>{
    const result=await Auth.currentAuthenticatedUser()
    setEmailId(result.attributes.email)
    setPhoneNumbers(result.attributes.phone_number)
    setName('Ritesh Patel')
    // console.log(result)
  }
  useEffect(()=>{
    fetch()
  },[])

  return (
    <View style={styles.container}>
      <Entypo name="user" size={230} />
      <Text style={styles.title}>Ritesh Patel</Text>
      <View style={styles.inputFieldContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          editable={false}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={styles.inputLabel}>Phone Numbers</Text>
        <TextInput
          style={styles.input}
          value={phoneNumbers}
          onChangeText={setPhoneNumbers}
          editable={false}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <Text style={styles.inputLabel}>Email ID</Text>
        <TextInput
          style={styles.input}
          value={emailId}
          onChangeText={setEmailId}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={()=>Auth.signOut()}>
        <Text style={styles.button}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputFieldContainer: {
    margin: 10,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  buttonContainer: {
    margin: 10,
  },
  button: {
    backgroundColor:'#e47911',
    color: '#fff',
    padding: 10,
    width: 300,
    textAlign: 'center',
  },
});

export default UserScreen;