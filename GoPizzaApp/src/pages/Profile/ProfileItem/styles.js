import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 13px 0 13px 15px;
  margin-bottom: 10px;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

export const OrderTitle = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
`;

export const OrderDate = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  padding: 8px 0;
`;

export const OrderPrice = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
`;
