import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Style from '../../style/style';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const ImageBackground = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    position: relative;
`;
export const Header = styled.View`
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
    color: ${Style.text};
    font-size: 50;
`;
export const Main = styled.View`

`;
export const Input = styled.TextInput`
    padding-left: 10;
    background-color: ${Style.gray};
    margin-left: 20;
    margin-right: 20;
    border-radius: 15;
    margin-top:20;
    height: 60;
    font-size: 20;
    color: ${Style.text};
`;
export const Footer = styled.View`
    margin-left: 20;
    margin-right: 20;
    flex-direction: row;
    height: 60;
    width: ${windowWidth * 0.9};
    justify-content: space-between;
    align-items: center;
    margin-top: 15;
`;
export const Sign = styled.Text`
    font-size: 20;
    color: ${Style.purple};
`;
export const ContainerSign = styled.View`
    margin-top: 20;
    margin-bottom: 20;
`;
export const Already = styled.Text`
    color: ${Style.text};
`;
export const Buton = styled.View`
    width: 150;
    height: 50;
    background-color: ${Style.purple};
    border-radius: 15;
    align-items: center;
    justify-content: center;
`;
export const ButtonText = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const Forgot = styled.Text`
    color: ${Style.text};
    margin-left: 20;
    margin-top: 20;
`;
export const PassCont = styled.View`
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    margin-right: 20;
    margin-top: 10;
`;
export const TextRemember = styled.Text`
    color: ${Style.text};
`;