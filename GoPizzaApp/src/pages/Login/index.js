import React, { Component } from 'react';
// import api from "~/services/api";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/login';
// import * as LoginActions from "~/store/actions/login";
import {
  View, Text, ActivityIndicator, StatusBar,
} from 'react-native';
//import { Creators as LoginActions } from '~/store/ducks/login';

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
import { colors } from '~/styles';

class Login extends Component {
  state = { email: '', password: '' };

  /* handleSubmit = async () => {
    const { email } = this.state;
    const { loginRequest } = this.props;

    loginRequest(email);
  }; */
  handleSubmit = async () => {
    const data = { ...this.state };
    const { loginRequest } = this.props;

    loginRequest(data);
  };

  handleSignup = () => {
    const { navigation } = this.props;
    navigation.navigate('Signup');
  };

  render() {
    const { email, password } = this.state;
    const { error, loading } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
        <LogoContainer>
          <Logo />
        </LogoContainer>

        {error && <Error>Credenciais incorretas</Error>}

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
            <ButtonText>Entrar</ButtonText>
          )}
        </Button>
        <ButtonTransparent onPress={this.handleSignup}>
          <ButtonText>Criar conta gratuita</ButtonText>
        </ButtonTransparent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
