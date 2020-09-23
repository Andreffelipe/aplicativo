import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container,ImageBackground,Header,Main,Title,Input,Buton,ButtonText,Footer,
  Already,ContainerSign,Sign} from './styles';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const[ email, setEmail] = React.useState('');
  const[ pass, setPass] = React.useState('');
  const[ confPass, setConfPass] = React.useState('');
  

  return (
    <Container>
    <ImageBackground source={ require('../../assets/back.png')}>
    <Header>
      <Title>
        Register
      </Title>
    </Header>
    <Main>
      <Input
      placeholder="Digite seu email"
      onChangeText={text => setEmail(text)}
      value={email}
      />
      <Input
      placeholder="Digite seu password"
      onChangeText={text => setPass(text)}
      value={pass}
      />
      <Input
      placeholder="Confirme seu password"
      onChangeText={text => setConfPass(text)}
      value={confPass}
      />
        <Footer>
        <ContainerSign>
          <Already>
            Already a member?
          </Already>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Sign>Sign In</Sign>
          </TouchableOpacity>
        </ContainerSign>
      <Buton>
      <TouchableOpacity onPress={() => navigation.navigate("Referal")}>
        <ButtonText>Sign in</ButtonText>
      </TouchableOpacity>
    </Buton>
        </Footer>
    </Main>
    </ImageBackground>
  </Container>
  );
};

export default Register;
