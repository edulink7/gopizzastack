import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import {
  Container,
  HeaderContainer,
  Title,
  Time,
  Total,
  ItemsContainer,
  Observation
} from "./styles";

import OrderItem from "./orderItem";

const Order = ({ order }) => {
  const { data } = order;
  const time = moment(data.date).fromNow();
  const { products } = order;
  return (
    <Container>
      <HeaderContainer>
        <Title>{`Pedido #${data.id} - ${data.User.name}`}</Title>
        <Time>{time}</Time>
        <Total>{`R$${data.total.toFixed(2)}`}</Total>
      </HeaderContainer>
      <ItemsContainer>
        {products.map(product => (
          <OrderItem key={`O#${data.id}P#${product.id}`} product={product} />
        ))}
      </ItemsContainer>
      <Observation>{`Observações: ${data.observation}`}</Observation>
    </Container>
  );
};

export default Order;
