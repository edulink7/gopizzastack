/**
 * Shared styled components before user authentication:
 * Used for Login and Signup pages
 */
import React from 'react';
import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.ImageBackground.attrs({
  source: require('~/images/fundo.jpg'),
})`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;

export const LogoContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${metrics.baseMargin * 3};
`;

export const Logo = styled.Image.attrs({
  source: require('~/images/logo.png'),
})`
  width: 72px;
  height: 72px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: ${metrics.baseRadius};
  padding: 0 20px;
  height: ${metrics.baseInputHeight};
  font-family: 'Helvetica, sans-serif';
  font-size: 15px;
  color: #333;
  margin-bottom: ${metrics.baseMargin};
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.button};
  border-radius: ${metrics.baseRadius};
  padding: 0 20px;
  height: ${metrics.baseInputHeight};
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const ButtonTransparent = styled.TouchableOpacity`
  background: ${colors.transparent};
  border-radius: ${metrics.baseRadius};
  padding: 0 20px;
  height: ${metrics.baseInputHeight};
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-family: 'Helvetica, sans-serif';
  font-size: 15px;
  font-weight: bold;
`;

export const Error = styled.Text`
  color: #ff817e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
