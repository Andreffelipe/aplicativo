import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Style from '../../style/style';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Style.fundo};
    padding-left: 20;
    padding-right: 20;
`;
export const Status = styled.View`
    position: absolute;
    width: ${windowWidth * 0.9};
    height: 20;
    margin-top: 20;
    margin-left: 20;
    flex-direction: row;
    justify-content: space-between;
`;
export const UserContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: ${windowHeight / 3};
`;
export const UserImage = styled.Image`
    height: 100;
    width: 100;
    border-radius: 75;
`;
export const UserName = styled.Text`
    margin-top: 20;
    color: ${Style.blue};
    font-size: 30;    
`;
export const Point = styled.View`
    background-color: ${Style.banner};
    height: 70;
    border-radius: 15;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 20;
    padding-right: 20;
`;
export const PointText = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const Mural = styled.View`
    background-color: ${Style.gray};
    height: 35;
    width: 35;
    align-items: center;
    justify-content: center;
    border-radius: 10;
`;
export const Add = styled.Text`
    color: ${Style.text};
`;
export const Btn = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10;
`;
export const Message = styled.View`
    background-color: ${Style.purple};
    border-radius: 10;
    height: 40;
    width: ${windowWidth / 2.5};
    align-items: center;
    justify-content: center;
`;
export const Shop = styled.View`
    background-color: ${Style.purple};
    border-radius: 10;
    height: 40;
    width: ${windowWidth / 2.5};
    align-items: center;
    justify-content: center;
`;
export const BtnText = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const Referal= styled.View`
    justify-content: space-between;
    align-items: center;
    margin-top: 20;
    height:${windowHeight / 3};
`;
export const Info = styled.Text`
    color: ${Style.text};
    font-size: 20;
    margin-top: 20;
`;
export const Title = styled.Text`
    color: ${Style.green};
    margin-top: 20;
    font-size: 20;
`;
export const ContainerRef = styled.View`
    border-width: 1;
    border-radius: 15;
    border-color: ${Style.tag};
    height: 50;
    width: ${windowWidth * 0.6};
    justify-content: center;
    align-items: center;
    margin-top: 5;
    margin-bottom: 10;
    flex-direction: column;
`;
export const RefText = styled.Text`
    font-size: 25;
    color: ${Style.text};
`;

export const RefConteiner = styled.View`
    align-items: center;
`;
export const Drop = styled.View`
    background-color: ${Style.banner};
    height: 120;
    border-radius: 15;
    align-items: center;
    justify-content: space-between;
    padding-left: 20;
    padding-right: 20;
    width: ${windowWidth * 0.9};
`;
export const Gun = styled.View`
    flex-direction: row;
    align-items: center;
    width: ${windowWidth * 0.9};
    justify-content: space-around;
    margin-bottom: 10;
`;
export const ConteinerRefDrop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: ${windowWidth * 0.9};
    
`;
export const DropImage = styled.Image`
    height: 80;
    width:100;
`;

export const GunText = styled.Text`
    color: ${Style.text};
    font-size: 20;
`;
export const DropText = styled.Text`
    color: ${Style.orange};
    font-size: 20;
`;