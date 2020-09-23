import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Style from '../../style/style';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    flex: 1;
    background-color: ${Style.fundo};
    padding-left: 20;
    padding-right: 20;
    
`;
export const Status = styled.View`
    width: ${windowWidth * 0.9};
    height: 20;
    margin-top: 20;
    flex-direction: row;
    justify-content: space-between;
`;
export const Icon= styled.View`
    
`;
export const ConteinerPreenchido= styled.View`
    padding-left: 10;
    background-color: ${Style.gray};
    border-radius: 15;
    margin-top:5;
    height: 60;
    font-size: 20;
    color: ${Style.text};
`;
export const ContainerTrade= styled.View`
    margin-top: 20;
`;
export const Input = styled.TextInput`
    padding-left: 10;
    background-color: ${Style.gray};
    border-radius: 15;
    margin-top:5;
    height: 60;
    font-size: 20;
    color: ${Style.text};
`;
export const Trade = styled.Text`
    color: ${Style.green};
    font-size: 20;
`;
export const Delete = styled.View`
    margin-top: 40;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`;
export const Buton = styled.View`
    width: 150;
    height: 50;
    background-color: ${Style.orange};
    border-radius: 15;
    align-items: center;
    justify-content: center;
`;
export const Button = styled.View`
    width: 150;
    height: 50;
    background-color: ${Style.green};
    border-radius: 15;
    align-items: center;
    justify-content: center;
    margin-top: 20;
`;
export const DeleteText = styled.Text`
    color: ${Style.text};
    font-size: 18;
`;
export const ButtonText = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const Footer = styled.View`
    background-color: ${Style.tag};
    flex-direction: row;
    justify-content: space-between;
    height: 40;
    width: ${windowWidth * 0.9};
    padding-left: 20;
    padding-right: 20;
    margin-top: 5;
    border-radius: 15;
    align-items: center;
    margin-top: 20;
`;
export const FooterText = styled.Text`
    color: ${Style.text};
    font-size: 15;
`;
export const Receive = styled.Text`
    color: ${Style.blue};
    font-size: 15;
`;
export const Ref = styled.View`
    margin-top: 10;
    justify-content: center;
    align-items: center;
`;
export const Info = styled.Text`
    color: ${Style.text};
    font-size: 15;
`;
export const SkInfo = styled.Text`
    color: ${Style.text};
    font-size: 15;
`;