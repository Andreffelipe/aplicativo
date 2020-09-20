import React from 'react';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Item from '../component/Item1';
import { Container,Bonus,Menu,Title,Status,Contador,ContText,TextButton,MsgText,Botao,VideoButton,VideoText } from './styles';
import { IronSource } from '@wowmaking/react-native-iron-source';
import IronSourceController from '../../controller/isronSource';

interface Iron{
  componentDidMount: Function;
  showRewardedVideo: Function;
  showOfferwall: Function;
}

const Reward: React.FC = ({ navigation }) => {
  var ironSourceController: Iron = new IronSourceController();
  React.useEffect(()=>{
    ironSourceController.componentDidMount();
  },[])

const[time, setTime] = React.useState('00:00');
var bonusTimer = 60 * 5;
var active = false;
function startTimer(duration) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      setTime(minutes + ":" + seconds)

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}
React.useEffect(()=>{
if (bonusTimer == 0){
  active = true;
}else{
  startTimer(bonusTimer);
}

},[])

function bonus(){
  bonusTimer = 60 * 5
  startTimer(bonusTimer);
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
