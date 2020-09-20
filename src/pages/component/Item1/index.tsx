import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Style from '../../../style/style';

interface Props{
  image: NodeRequire;
  name: string;
}

const Item: React.FC<Props> = (props) => {
  return (
    <View style={ styles.container }>
      <Image
        style={ styles.image }
        source={props.image}
      />
      <Text style={ styles.title }>{props.name}</Text>
    </View>
  );
}
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: Style.banner,
    height: 130,
    width: 178,
    marginRight: 10,
    marginVertical: 5,

  },
  image:{
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Item;