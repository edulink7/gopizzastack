import React, { Component } from 'react';
// import api from "~/services/api";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, ActivityIndicator } from 'react-native';
import SignupActions from '~/store/ducks/signup';

// import * as LoginActions from "~/store/actions/login";
// import { Creators as SignupActions } from '~/store/ducks/signup';

import {
  Container,
  Input,
  Button,
  ButtonText,
  ButtonTransparent,
  Error,
  LogoContainer,
  Logo,
} from '~/styles/auth';

class Signup extends Component {
  state = { name: '', username: '', password: '' };

  handleSubmit = async () => {
    const data = { ...this.state };
    const { signupRequest } = this.props;

    signupRequest(data);
  };

  handleLogin = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  render() {
    const { name, email, password } = this.state;
    const { error, loading } = this.props;

    return (
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        {error && <Error>Erro ao realizar cadastro</Error>}

        <Input
          value={name}
          onChangeText={text => this.setState({ name: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nome completo"
        />
        <Input
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu e-mail"
        />
        <Input
          value={password}
          onChangeText={text => this.setState({ password: text })}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Senha secreta"
        />
        <Button onPress={this.handleSubmit}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Criar conta</ButtonText>
          )}
        </Button>
        <ButtonTransparent onPress={this.handleLogin}>
          <ButtonText>Já tenho login</ButtonText>
        </ButtonTransparent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.signup.error,
  loading: state.signup.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
