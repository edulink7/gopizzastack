import React from 'react';
// import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Preview, Title, Price,
} from './styles';

const selectImage = (id) => {
  switch (id) {
    case 1:
      return require('~/images/sizes/tamanho-gg.png');
    case 2:
      return require('~/images/sizes/tamanho-g.png');
    case 3:
      return require('~/images/sizes/tamanho-m.png');
    case 4:
      return require('~/images/sizes/tamanho-p.png');
    default:
      return require('~/images/sizes/tamanho-gg.png');
  }
};

const SizeItem = ({ product, onPress }) => {
  const icon = selectImage(product.id);
  // console.tron.log(product);
  return (
    <Container onPress={onPress}>
      <Preview source={{ uri: product.preview }} scale="100%" />
      <Title>{product.name}</Title>
      <Price>{`R$${product.price.toFixed(2)}`}</Price>
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

export default SizeItem;
