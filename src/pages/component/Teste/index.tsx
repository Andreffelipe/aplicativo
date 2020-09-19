import React from 'react';
import Data from "../../../service/shop";
import Style from '../../../style/style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, View, FlatList,
   StyleSheet, Text, Image, Dimensions } from 'react-native';

interface Items{
  id?: string;
  name: string;
  price: string;
  image: string;
  funcao: Function;
};
const numColumns = 2;
const Item = ({ name, price ,image, funcao, id }: Items) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={{uri:image}}
    />
    <View style={styles.Conttitle}>
    <Text style={styles.title}>{name}</Text>
    </View>
    <View style={styles.compra}>
      <Text style={styles.price}>{price} Point</Text>
      <TouchableOpacity style={styles.botao} onPress={() => funcao(id,price)}>
        <Text style={styles.text}>Comprar</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const App = (props) => {
  const renderItem = ({ item }) => (
    <Item funcao={props.function} id={item.id} name={item.name} price={item.price} image={item.image}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -10,
    width: windowWidth,
    //justifyContent: 'space-between',
    //alignItems: 'center',
    //paddingHorizontal: 20,
    //paddingBottom: 10,
    //paddingTop: 25,
  },
  item:{
    width: windowWidth * 0.9,
    height: 130,
    backgroundColor: Style.banner,
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  image:{
    height: 90,
    width: 100,
    marginLeft:5,
  },
  title: {
    marginHorizontal: 10,
    fontSize: 15,
    color: Style.text,
  },
  price:{
    fontWeight: 'bold',
    fontSize: 20,
    color: Style.text,
    marginBottom: 5,
  },
  compra:{
    marginRight: 10,
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  botao:{
    height: 40,
    width: 100,
    backgroundColor: Style.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text:{
    color: Style.text,
    fontSize: 15,
    
  },
  Conttitle:{
    width: 130
  }
});

export default App;