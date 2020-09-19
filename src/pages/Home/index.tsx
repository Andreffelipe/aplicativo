import React from 'react';
import {Image, View, Text } from 'react-native';
import { user } from '../../user/user';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container,UserContainer,UserImage,UserName,Point,PointText,Mural,Add,Referal,Info,
  Title,ContainerRef,RefText,Drop,ConteinerRefDrop,DropImage,DropText,RefConteiner,
  Btn, Message, Shop,BtnText,Gun,GunText,Status } from './styles';

const Home: React.FC = ({ navigation }) => {

  return (
    <Container>
      <Status>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
      <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{}}>
      <Entypo name="export" size={24} color="white" />
      </TouchableOpacity>
      </Status>
      <UserContainer>
      <UserImage
      source={{
        uri: 'https://api.adorable.io/avatars/93/abott@adorable.png',        
       }}
      />
      <UserName>{user?.name}</UserName>
      </UserContainer>

      <Point>
      <PointText>Point: {user?.pontos}</PointText>
        <TouchableOpacity onPress={()=> navigation.navigate("Reward")}>
        <Mural>
          <Add>+</Add>
        </Mural>
        </TouchableOpacity>
      </Point>
      <Btn>
        <Message>
          <BtnText>Message</BtnText>
        </Message>
        <TouchableOpacity onPress={()=> navigation.navigate("Compra")}>
          <Shop>
              <BtnText>Shop</BtnText>
          </Shop>
        </TouchableOpacity>
      </Btn>
      <Referal>
        <Info>Receba 10% de todo ganho de usar seu referal code</Info>
       
       <RefConteiner>
        <Title>Referal Code</Title>
        <ContainerRef>
          <RefText>
            {user?.referal}
          </RefText>
        </ContainerRef>
        </RefConteiner>
        <Drop>
          <DropText>nice Drop</DropText>
        
        <Gun>
        <DropImage
        source={{uri:'https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_marble_fade_light_large.c9170bcb854e5d3ed0f3a22bae8a4513fd46954a.png'}}
        />
          <GunText>Marble Fade</GunText>
        </Gun>
        </Drop>
       

      </Referal>
    </Container>
  );
};

export default Home;
