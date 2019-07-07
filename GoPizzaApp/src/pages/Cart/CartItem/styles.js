import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 13px 0 13px 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Preview = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 78px;
  height: 100%;
  border-radius: ${metrics.baseRadius};
`;

export const DetailsContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  padding: 8px 0;
`;

export const Price = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
`;

export const ButtonRemove = styled.TouchableOpacity`
  padding-right: 20px;
`;
