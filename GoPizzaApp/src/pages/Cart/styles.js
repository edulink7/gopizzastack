import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
  padding-bottom: 30px;
`;

export const ContentContainer = styled.View``;

export const Profile = styled.TouchableOpacity``;

export const ButtonAdd = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 50;
  background-color: ${colors.light};
  justify-content: center;
  align-items: center;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const CartList = styled.FlatList`
  margin-top: -44px;
  padding: 0 23px;
`;
