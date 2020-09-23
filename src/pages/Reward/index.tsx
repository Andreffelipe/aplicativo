import React from 'react';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Item from '../component/Item1';
import { Container,Bonus,Menu,Title,Status,Contador,ContText,TextButton,MsgText,Botao,VideoButton,VideoText } from './styles';
import IronSourceController from '../../controller/isronSource';
import { useNavigation } from "@react-navigation/native";

interface Iron{
  componentDidMount: Function;
  showRewardedVideo: Function;
  showOfferwall: Function;
}

const Reward: React.FC = () => {
  const navigation = useNavigation();
  
  var ironSourceController: Iron = new IronSourceController();
  React.useEffect(()=>{
    ironSourceController.componentDidMount();
    bonus()
  },[])

const[time, setTime] = React.useState('00:00');
var active = false

function bonus(){

  const now = new Date(); // Data de hoje
  const past = new Date('2020-09-21'); // Outra data no passado
  const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
  var data2 = now.getHours() + now.getMinutes() + now.getSeconds();

  function formatar_segundos(h,min,s) {
 return (h*3600)+(min*60)+(s);
}

var data = formatar_segundos(23,14,32);

function data_format(value) {
 var h = Math.floor(value/3600);
 var min = Math.floor((value - (h*3600))/60);
 var s = value - (Math.floor(value/60)*60);
 return h + "h "+ min + "min "+s + "s";
}

var diferenca = data_format(data-data2);
}
  return (
    <Container>
      <Status>
      <TouchableOpacity
      onPress={()=>navigation.goBack()}
      >
      <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      
      </Status>
      <Bonus>
        <Contador>
          <MsgText>Daily Bonus</MsgText>
          {
          active
          ? <ContText>{time}</ContText>
          :<TouchableOpacity>
            <Botao>
              <TextButton>
                  Receber
                </TextButton>
            </Botao>
          </TouchableOpacity>
          }
        </Contador>
        
      </Bonus>
      <TouchableOpacity onPress={()=> ironSourceController.showRewardedVideo()}>
        <VideoButton> 
          <VideoText>Watch Video</VideoText>
        </VideoButton>
      </TouchableOpacity>
      <Title>Reward</Title>
      <ScrollView>
      <Menu>
      <TouchableOpacity onPress={()=> ironSourceController.showOfferwall()}>
        <Item image={require("../../assets/IronSource.png")} name="IronSource"/>
      </TouchableOpacity>
      <Item image={require("../../assets/ads.png")} name="Inmobi"/>
      </Menu>
      <Menu>
      <Item image={require("../../assets/ayet.png")} name="TapJoy"/>
      <Item image={require("../../assets/off.png")} name="Inmobi"/>
      </Menu>
      <Menu>
      <Item image={require("../../assets/offerd.png")} name="TapJoy"/>
      <Item image={require("../../assets/pea.png")} name="Inmobi"/>
      </Menu>
      </ScrollView>
    </Container>
  );
};

export default Reward;
