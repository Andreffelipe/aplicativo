import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Container,Footer,FooterText,Receive,Input,Trade,Delete,DeleteText,Buton,ButtonText,
  Ref,Info,SkInfo,Icon,Status,ContainerTrade,Button } from './styles';

const Usuario: React.FC = () => {
  const navigation = useNavigation();
  const[trade, setTrade] = React.useState('');
  const[ referal, setReferal] = React.useState('');
    
  return (
    <Container>
      <Status>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
      <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      
      </Status>
      <Icon></Icon>
      <ContainerTrade>
        <Trade>Trade URL</Trade>
      <Input
      placeholder="trade link"
      onChangeText={text => setTrade(text)}
      value={trade}
      />
      </ContainerTrade>
      <Ref>
        <Info> Use o referal code de um amigo ganhe 150 pontos </Info>
        <SkInfo> Referal Code "SKINSLAB"</SkInfo>
      </Ref>
      <Input
      placeholder="Referal Code"
      onChangeText={text => setReferal(text)}
      value={referal}
      />
      <Button>
      <TouchableOpacity 
       onPress={() => {}}
       disabled={ !trade || !referal }>
        <ButtonText>Apply</ButtonText>
      </TouchableOpacity>
      </Button>
      <Footer>
          <FooterText>Inviated</FooterText>
          <Receive>0</Receive>
        </Footer>
        <Footer>
          <FooterText>Received</FooterText>
          <Receive>0</Receive>
        </Footer>
        <Delete>
        <DeleteText>
           Delete your account
        </DeleteText>
      <Buton>
      <TouchableOpacity onPress={() => {}}>
        <ButtonText>Delete</ButtonText>
      </TouchableOpacity>
      </Buton>
      </Delete>
    </Container>
  );
};

export default Usuario;
