import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '~/styles';

export const Container = styled.View``;

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderImage = styled.ImageBackground.attrs({
  source: require('~/images/header-background.png'),
  resizeMode: 'contain',
})`
  width: 100%;
  height: 160px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${colors.lighter};
  margin-top: -50px;
`;

export const ContainerLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Previous = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  padding-left: 10px;
`;

export const TextRight = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
