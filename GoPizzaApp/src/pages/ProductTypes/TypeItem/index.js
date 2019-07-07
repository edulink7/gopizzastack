import React from 'react';
// import PropTypes from 'prop-types';

// import { View, Text } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Preview, Title } from './styles';

const selectImage = (id) => {
  switch (id) {
    case 1:
      return require('~/images/pizzas/1.png');
    case 2:
      return require('~/images/pizzas/2.png');
    case 3:
      return require('~/images/pizzas/3.png');
    case 4:
      return require('~/images/pizzas/4.png');
    case 5:
      return require('~/images/pizzas/5.png');
    case 6:
      return require('~/images/pizzas/6.png');
    default:
      return require('~/images/pizzas/1.png');
  }
};

const TypeItem = ({ product, onPress }) => {
  const icon = selectImage(product.id);
  // console.tron.log(product);
  return (
    <Container onPress={onPress}>
      <Preview source={{ uri: product.preview }} />
      <Title>{product.name}</Title>
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

export default TypeItem;
