import React from 'react';
import { Text } from 'react-native';

import { Container,Footer,FooterText,Receive } from './styles';

const Usuario: React.FC = () => {
  return (
    <Container>
      <Footer>
          <FooterText>Inviated</FooterText>
          <Receive>0</Receive>
        </Footer>
        <Footer>
          <FooterText>Received</FooterText>
          <Receive>0</Receive>
        </Footer>
    </Container>
  );
};

export default Usuario;
