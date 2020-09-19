import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Style from '../../style/style';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`

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
`;
export const FooterText = styled.Text`
    color: ${Style.text};
    font-size: 15;
`;
export const Receive = styled.Text`
    color: ${Style.blue};
    font-size: 15;
`;