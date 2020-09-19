import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Style from '../../style/style';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.SafeAreaView`
    flex: 1;
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
    color: white;
    font-size: 50;
`;
export const Main = styled.View`
    flex: 1;

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
export const Buton = styled.View`
    width: ${windowWidth * 0.9};
    height: 50;
    background-color: ${Style.purple};
    border-radius: 15;
    align-items: center;
    justify-content: center;
    margin-left: 20;
    margin-right: 20;
    margin-top: 25;
`;
export const ButtonText = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const Referal = styled.View`
    margin-top: 10;
    width: ${windowWidth};
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