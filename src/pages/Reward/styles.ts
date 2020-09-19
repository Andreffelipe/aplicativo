import styled from 'styled-components/native';
import Style from '../../style/style';
import { Dimensions } from 'react-native';

const window = Dimensions.get('window').width;
export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Style.fundo};
    padding-left: 20;
    padding-right: 20;
    align-items: center;
`;
export const VideoButton = styled.View`
    width: ${window * 0.7};
    height: 60;
    border-radius: 15;
    background-color: ${Style.green};
    align-items: center;
    justify-content: center;
    margin-top: 20;
`;
export const VideoText = styled.Text`
    color: ${Style.text};
    font-size: 25;
`;
export const Status = styled.View`
    width: ${window * 0.9};
    height: 20;
    margin-top: 20;
    flex-direction: row;
    justify-content: space-between;
`;
export const Bonus = styled.View`
    margin-top: 25;
    padding-top: 15;
    background-color: ${Style.banner};
    height: 60;
    align-items: stretch;
`;
export const Menu = styled.View`
    flex-direction: row;
`;
export const Title = styled.Text`
    margin-top: 25;
    margin-bottom: 25;
    color: ${Style.text};
    font-size: 35;
`;
export const Contador = styled.View`
    background-color: ${Style.banner};
    width: ${window * 0.9};
    height: 30; 
    border-radius: 15;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;
export const ContText = styled.Text`
    color: ${Style.green};
    font-size: 20;
`;
export const Botao = styled.View`
    background-color: ${Style.purple};
    height: 50;
    width: 100;
    align-items: center;
    justify-content: center;
    border-radius: 15;
`;
export const TextButton = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const MsgText = styled.Text`
    font-size: 25;
    color: ${Style.text};
`;
