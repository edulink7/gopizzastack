import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 13px 0 13px 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Preview = styled.Image`
  width: 78px;
  height: 78px;
  border-radius: ${metrics.baseRadius};
`;

export const DetailsContainer = styled.View`
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
  min-height: 28px;
  max-width: 190px;
  padding: 8px 0;
`;

export const TimerContainer = styled.View`
  flex-direction: row;
`;

export const TimeIcon = styled.Image.attrs({
  source: require('~/images/menu/timer.png'),
})`
  width: 12px;
  height: 12px;
  margin-right: 6px;
`;

export const TimeText = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
`;
