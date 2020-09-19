import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Style from '../../../style/style';

interface Props{
  nome: string;
  preco: string;
  image : string;
}

const Item: React.FC<Props> = (props) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.faixa }></View>
      <Image
        style={ styles.image}
        source={{uri:props.image}}
      />
      <Text style={ styles.title }>{props.nome}</Text>
      <Text style={ styles.price }>{props.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    //alignItems: 'center',
    backgroundColor: Style.banner,
    height:220,
    width: 180,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 25,
    borderRadius: 10,
  },
  faixa:{
    height: 1,
    backgroundColor: Style.faixaRed,
    shadowColor: Style.faixaRed,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16.00,
    elevation: 5,
  },
  image:{
    height: 80,
  },
  title: {
    marginTop: 10,
    fontSize: 13,
    color: Style.text,
  },
  price:{
    fontWeight: 'bold',
    fontSize: 20,
    color: Style.text,
  }
});

export default Item;
