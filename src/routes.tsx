import * as React from 'react';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import Reward from './pages/Reward';
import Compra from './pages/Compra';
import Usuario from './pages/Usuario';


const Stack = createStackNavigator();

function Routes() {
  
  var [islogged, setIslogged] = React.useState(false);
  
  React.useEffect(()=>{
    const credential = async () => {
      try {
        // Retrieve the credentials
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          console.log(
            'Credentials successfully loaded for user ' + credentials.username
          );
          setIslogged(true);
        } else {
          console.log('No credentials stored');
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
      await Keychain.resetGenericPassword();
    };
    credential();
    // const getData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('@storage_Key');
    //     if (value !== null) {
    //       setIslogged(true);
    //     }
    //   } catch (e) {
    //     // error reading value
    //   }
    // };
    // getData();
  },[])

  function mainFlow() {
    return (
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
        headerShown: false,
        }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Reward" component={Reward} />
          <Stack.Screen name="Compra" component={Compra} />
          <Stack.Screen name="User" component={Usuario} />
        </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
       <Stack.Navigator>
        {islogged ? (
        <Stack.Screen
        name="mainFlow"
        component={mainFlow}
        options={{ headerShown: false }}
      />
        ) : (
       <>
        <Stack.Screen 
        name="Login" 
        component={LoginPage}
        options={{ headerShown: false }}/>
        <Stack.Screen 
        name="Register" 
        component={Register}
        options={{ headerShown: false }}/>
       </>
          )}
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
