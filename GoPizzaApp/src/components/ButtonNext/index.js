import React from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, ButtonText } from './styles';

const ButtonNext = (props) => {
  const { title, onPress } = props;
  return (
    <Button onPress={onPress}>
      <ButtonText>{title}</ButtonText>
      <Icon name="navigate-next" size={20} color="#fff" />
    </Button>
  );
};

export default ButtonNext;
