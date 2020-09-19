import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container,ImageBackground,Header,Main,Title,Input,Buton,ButtonText,Referal,
  Info,SkInfo } from './styles';

const Register: React.FC = () => {
  const[ email, setEmail] = React.useState('');
  const[ pass, setPass] = React.useState('');
  const[ confPass, setConfPass] = React.useState('');
  const[ referal, setReferal] = React.useState('');

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
      onChangeText={text => setEmail(text)}
      value={email}
      />
      <Input
      placeholder="Confirme seu password"
      onChangeText={text => setEmail(text)}
      value={email}
      />
      <Referal>
        <Info> Use o referal code de um amigo ganhe 150 pontos </Info>
        <SkInfo> Referal Code "SKINSLAB"</SkInfo>
      </Referal>
      <Input
      placeholder="Referal Code"
      onChangeText={text => setEmail(text)}
      value={email}
      />
      <Buton>
      <TouchableOpacity onPress={() => signIn({ username, password })}>
        <ButtonText>Sign in</ButtonText>
      </TouchableOpacity>
    </Buton>
    </Main>
    </ImageBackground>
  </Container>
  );
};

export default Register;
