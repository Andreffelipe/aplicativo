import React from 'react';
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { setUser } from '../../user/user';
import api from '../../service/api';
import * as Keychain from 'react-native-keychain';
import { Container,ImageBackground,Header,Main,Title,Input,Footer,Sign,
  ContainerSign,Already,Buton,ButtonText,Forgot,PassCont,TextRemember } from './styles';
import Snackbar from 'react-native-snackbar';
import { Alert,Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  interface Auth {
    username: string;
    password: string;
  }

  const signIn = (props: Auth) => {
    if(username== ""|| password == ""){
      createTwoButtonAlert();
      return
    }
    api
    .post('login', {
      email: props.username,
      password: props.password,
    })
    .then((response) => {
      var res = response.data.user;
      setUser(res._id, res.name, res.email, res.steamid, res.referal, res.pontos);
      storeData(response.data.token);
      security();
      success();
    })
    .catch((error) => {
      console.log(error.response.data);
      err('Login failed')
    })
    .finally(() => {
      console.log('finalizou');
      
    });
  };

  const security = async () => {
    //const username = 'zuck';
    //const password = 'poniesRgr8';
  
    // Store the credentials
    await Keychain.setGenericPassword(username, password);
  
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log(
          'Credentials successfully loaded for user ' + credentials.username
        );
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
    await Keychain.resetGenericPassword();
  };

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  const createTwoButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
  const success = async ()=>{
    navigation.navigate("Home")
  }
  const err = async (value: string)=>{
    Snackbar.show({
      text: `${value}`,
      duration: Snackbar.LENGTH_SHORT,
    });
  }

  return (
    <Container>
      <ImageBackground source={ require('../../assets/back.png')}>
      <Header>
        <Title>
          Login
        </Title>
      </Header>
      <Main>
      <Input
      placeholder="Digite seu email"
      onChangeText={text => setUsername(text)}
      value={username}
      keyboardType="email-address"
      />
      <Input
      placeholder="Digite seu password"
      onChangeText={text => setPassword(text)}
      value={password}
      secureTextEntry
      />
      <PassCont>
        <TextRemember>lembra loguin</TextRemember>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </PassCont>
      <Footer>
        <ContainerSign>
          <Already>
            Already a member?
          </Already>
          <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
            <Sign>Sign In</Sign>
          </TouchableOpacity>
        </ContainerSign>
        <Buton>
          <TouchableOpacity onPress={() => signIn({ username, password })}>
            <ButtonText>Sign in</ButtonText>
          </TouchableOpacity>
        </Buton>
      </Footer>
      <Forgot>Forgot your password | reset</Forgot>
      </Main>
      </ImageBackground>
    </Container>
  );
};

export default Login;
