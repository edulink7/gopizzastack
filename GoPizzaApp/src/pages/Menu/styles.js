import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Header = styled.ImageBackground.attrs({
  source: require('~/images/header-background.png'),
})`
  width: 100%;
  height: 160px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${colors.lighter};
  margin-top: -44px;
`;

export const Profile = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

export const Cart = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 50;
  background-color: ${colors.button};
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
  padding: 0 23px 30px 22px;
`;

export const MenuList = styled.FlatList`
  margin-top: -44px;
`;

export const Refresh = styled.ActivityIndicator`
  margin-top: ${metrics.baseMargin * 2};
`;

export const Error = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.danger};
  background-color: ${colors.lighter};
  text-align: center;
  padding: 20px;
`;
