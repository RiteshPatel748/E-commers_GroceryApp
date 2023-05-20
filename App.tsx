import { View,StatusBar,useColorScheme} from 'react-native';
import React from 'react'; 
import 'react-native-gesture-handler';
import Router from './src/router/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator, AmplifyTheme} from 'aws-amplify-react-native';



Amplify.configure(awsconfig)


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router/>
    </View>
    
  );
}
const signUpConfig = {
  defaultCountryCode: '91',
};


export default withAuthenticator(App ,{usernameAttributes: 'phone_number',signUpConfig});
