import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  background: ${colors.button};
  border-radius: ${metrics.baseRadius * 3};
  padding: 0 20px;
  height: ${metrics.altButtonHeight};
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'Helvetica, sans-serif';
  font-size: 14px;
  font-weight: bold;
  margin-right: ${metrics.baseMargin};
`;
