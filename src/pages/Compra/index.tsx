import React from 'react';
import { AntDesign,Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler'; 
import { Text, View } from 'react-native';
import {user} from '../../user/user';
import { Container,Head,Status,PointUser,ShopUser,PointItem,TextPoint,TextItem } from './styles';
import Item from '../component/Teste'
import Snackbar from 'react-native-snackbar';


const Compra: React.FC = ({navigation}) => {

  const[item, setItems] = React.useState(0)
  
      function compra(id: number,price: number) {
        if (price < user.pontos ) {
          console.log(id);
          console.log(price);
        } else {
          err("saldo insuficiente");
        }
      }
      const err = async (value: string)=>{
        Snackbar.show({
          text: `${value}`,
          duration: Snackbar.LENGTH_SHORT,
        });
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
      <Head>
        <PointUser>
          <TextPoint>
            {user?.pontos} Points
          </TextPoint>
        </PointUser>
        <ShopUser>
          <AntDesign name="shoppingcart" size={30} color="white" />
        </ShopUser>
        <PointItem>
          <TextItem>
            CS:GO
          </TextItem>
        </PointItem>
      </Head>
      <Item function={compra}/>
    </Container>
  );
};

export default Compra;
