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
export const Head = styled.View`
    margin-top: 20;
    margin-bottom: 20;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 6;
    align-items: center;
    height: 50;
    background-color: ${Style.purple};
`;
export const Main = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Status = styled.View`
    width: ${windowWidth * 0.9};
    height: 20;
    margin-top: 20;
    flex-direction: row;
    justify-content: space-between;
`;
export const TextItem = styled.Text`
    font-size: 20;
`;
export const TextPoint = styled.Text`
    font-size: 20;
    color: white;
    `;
export const PointUser = styled.View`
    width: 130;
    margin-left: 4;
`;
export const ShopUser = styled.View`
    width: 100;
    align-items: center;
`;
export const PointItem = styled.View`
    width: 130;
    align-items: flex-end;
    margin-right: 4;
`;