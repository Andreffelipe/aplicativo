import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { setUser } from '../../user/user';
import api from '../../service/api';
import { Text,Alert} from 'react-native';
import { Container,ImageBackground,Header,Main,Title,Input,Footer,Sign,
  ContainerSign,Already,Buton,ButtonText,Forgot } from './styles';


const Login: React.FC = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
      //setUser(res._id, res.name, res.email, res.referal, res.pontos);
      success(response.data.token);
    })
    .catch((error) => {
      console.log(error.response.data);
    })
    .finally(() => {
      console.log('finalizou');
    });
  };

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

  const success = async (value: string)=>{}

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
