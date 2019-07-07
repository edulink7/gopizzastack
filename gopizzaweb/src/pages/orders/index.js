import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import OrdersActions from "../../store/ducks/orders";

import Header from "../../components/header";
import Order from "../../components/order";

import { Container, ContentContainer, LabelOrders } from "./styles";

class Orders extends Component {
  async componentDidMount() {
    const { loadOrdersRequest } = this.props;

    const data = { date: new Date().toISOString().slice(0, 10) };
    loadOrdersRequest(data);
  }

  render() {
    const { name } = this.props.login.data.user;
    const { data } = this.props.orders;
    //const name = "USER";
    console.tron.log("Orders", data);

    return (
      <Container>
        <Header name={name} />
        <ContentContainer>
          <LabelOrders>Últimos pedidos</LabelOrders>
          {data.orders.map(order => (
            <Order key={order.data.id} order={order} />
          ))}
        </ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
