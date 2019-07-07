import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const ContentContainer = styled.View`
  align-items: stretch;
  justify-content: flex-start;
  padding: 20px;
  margin-top: -64px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: colors.regular,
  width: props.width,
}))`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 0 20px;
  height: ${metrics.baseInputHeight};
  font-family: 'Helvetica, sans-serif';
  font-size: 15px;
  color: ${colors.darker};
  margin-bottom: ${metrics.baseMargin};
`;

export const InputLarge = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
  multiline: true,
  numberOfLines: 6,
  textAlignVertical: 'top',
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: 10px 20px;
  height: 125px;
  font-family: 'Helvetica, sans-serif';
  font-size: 15px;
  color: ${colors.darker};
  margin-bottom: ${metrics.baseMargin};
`;

export const ContainerAddress = styled.View`
  flex-direction: row;
`;

export const ContainerNumber = styled.View`
  flex: 1;
  padding-left: 10px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 10px;
`;
