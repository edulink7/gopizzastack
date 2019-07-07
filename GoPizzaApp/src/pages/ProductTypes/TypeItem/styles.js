import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  max-width: ${metrics.screenWidth / 2};
  margin-right: 10px;
`;

export const Preview = styled.Image.attrs({
  resizeMode: 'contain',
})`
  flex: 1;
  width: 100;
  height: 100;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  color: #0b2031;
  padding-top: 14px;
`;
