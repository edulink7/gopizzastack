import React from 'react';
// import PropTypes from 'prop-types';
import moment from 'moment';

// import { View, Text } from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, OrderTitle, OrderDate, OrderPrice,
} from './styles';

const ProfileItem = ({ order }) => (
  <Container>
    <OrderTitle>{`Pedido #${order.id}`}</OrderTitle>
    <OrderDate>{moment(order.date).fromNow()}</OrderDate>
    <OrderPrice>{`R$${order.total.toFixed(2)}`}</OrderPrice>
  </Container>
);

/* RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
}; */

export default ProfileItem;
