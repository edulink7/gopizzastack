import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { Container, Preview, TitleContainer, Title, Size } from "./styles";

const OrderItem = ({ product }) => {
  const { display } = product.ProductType.Product;
  return (
    <Container>
      <Preview
        src={
          product.use_as_cart_img
            ? product.preview
            : product.ProductType.preview
        }
      />
      <TitleContainer>
        <Title>
          {`${display !== "none" ? `${display}` : ""} ${
            product.ProductType.name
          }`}
        </Title>
        <Size>{`${product.description} ${product.name}`}</Size>
      </TitleContainer>
    </Container>
  );
};

export default OrderItem;
