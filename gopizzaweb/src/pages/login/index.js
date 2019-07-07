import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginActions from "../../store/ducks/login";
import { Redirect } from "react-router-dom";

import { Container, Form, Background, Logo } from "./styles";

class Login extends Component {
  /*static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string
        })
      ),
      error: PropTypes.oneOfType([null, PropTypes.string])
    }).isRequired
  };*/

  state = {
    email: "",
    password: "",
    error: false
  };

  handleSubmit = async event => {
    event.preventDefault();
    const data = { ...this.state };
    const { loginRequest } = this.props;

    loginRequest(data);
  };

  render() {
    const { login } = this.props;
    if (login.data.token !== undefined) return <Redirect to="/orders" />;

    return (
      <Container>
        <Background />
        <Logo />
        <Form withError={this.state.error} onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Seu e-mail"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha secreta"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">
            {this.state.loading ? <i className="fa fa-spinner" /> : "Entrar"}
          </button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
