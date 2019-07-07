import React from 'react';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
  padding: 0 3px 30px 13px;
`;

export const TypeList = styled.FlatList.attrs({
  numColumns: 2,
  columnWrapper: { justifyContent: 'space-between' },
})`
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
