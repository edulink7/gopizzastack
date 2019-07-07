import React from 'react';
// import PropTypes from 'prop-types';

// import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Preview,
  DetailsContainer,
  Title,
  Description,
  Price,
  ButtonRemove,
} from './styles';

const selectImage = (id) => {
  switch (id) {
    case 1:
      return require('~/images/menu/pizza.png');
    case 2:
      return require('~/images/menu/pasta.png');
    case 3:
      return require('~/images/menu/calzone.png');
    case 4:
      return require('~/images/menu/soda.png');
    case 5:
      return require('~/images/menu/beer.png');
    default:
      return require('~/images/menu/pizza.png');
  }
};

const CartItem = ({ product, onRemove }) => {
  //const icon = selectImage(product.id);
  return (
    <Container>
      <Preview source={{uri: product.preview}} />
      <DetailsContainer>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{`R$${product.price.toFixed(2)}`}</Price>
      </DetailsContainer>
      <ButtonRemove onPress={onRemove}>
        <Icon name="delete-forever" size={20} color="#e5293e" />
      </ButtonRemove>
    </Container>
  );
};

/* RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
}; */

export default CartItem;
