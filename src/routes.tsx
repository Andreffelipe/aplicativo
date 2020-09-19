import * as React from 'react';
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

function Routes({ navigation: any }) {
  var [islogged, setIslogged] = React.useState(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        //setIslogged(true);
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();

  return (
    <NavigationContainer>
        {islogged ? (
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
        ) : (
        <Stack.Navigator
           initialRouteName="Login"
           screenOptions={{
           headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
          )}
      
    </NavigationContainer>
  );
}

export default Routes;
