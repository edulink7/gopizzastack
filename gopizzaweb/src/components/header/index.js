import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import {
  Container,
  TitleContainer,
  Title,
  Logo,
  ControlsContainer,
  UserContainer,
  User,
  Logout,
  Bag
} from "./styles";

const Header = ({ name }) => {
  return (
    <Container>
      <TitleContainer>
        <Logo />
        <Title>Pizzaria Don Juan</Title>
      </TitleContainer>
      <ControlsContainer>
        <UserContainer>
          <User>{name}</User>
          <Logout href="/">Sair do app</Logout>
        </UserContainer>
        <Bag>
          <img src="bag.png" />
        </Bag>
      </ControlsContainer>
    </Container>
  );
};

export default Header;
