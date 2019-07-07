import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';
import AddressActions from '~/store/ducks/address';

import { View } from 'react-native';

import Header from '~/components/Header';
import ButtonNext from '~/components/ButtonNext';

import {
  Container,
  ContentContainer,
  Input,
  InputLarge,
  ContainerAddress,
  ContainerNumber,
  ContainerButton,
} from './styles';

class Order extends Component {
  state = {
    observation: '',
    cep: '',
    street: '',
    number: '',
    district: '',
    addressFetched: false
  };

  handleOrder = () => {
    const { cart, cartOrderRequest, navigation } = this.props;
    let items = cart.items.map(item => item.item_id);
    const total = navigation.getParam('total');
    const date = new Date();

    //navigation.navigate('Profile');
    const data = { ...this.state, items, total, date };
    cartOrderRequest(data);

  };

  handlePrevious = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart', { data: { adding: false } });
  };

  async componentDidUpdate(prevProps, prevState){
    if(prevState.cep.length === 7){
      const { loadAddressRequest } = this.props;
      const { cep } = this.state;
      loadAddressRequest(cep);
    }
    const { addressFetched } = this.state;
    const { address } = this.props;
    if(address.available === true && addressFetched === false){
      this.setState({ street: address.data.logradouro,
      district: address.data.bairro, addressFetched: true });
    }
    //console.tron.log("Address", address.available)

  };

  render() {
    const {
      observation, cep, street, number, district,
    } = this.state;
    const { navigation, address } = this.props;
    const total = navigation.getParam('total');

    /*if(address.available === true){
      street = address.data.logradouro;
      district = address.data.bairro;
    }
    console.tron.log("Address", address.available)*/

    return (
      <Container>
        <Header
          title="Realizar pedido"
          handlePrevious={this.handlePrevious}
          details={`R$${total.toFixed(2)}`}
        />
        <ContentContainer>
          <InputLarge
            value={observation}
            onChangeText={text => this.setState({ observation: text })}
            autoCapitalize="none"
            autoCorrect
            placeholder="Alguma observação?"
          />
          <Input
            value={cep}
            onChangeText={text => this.setState({ cep: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Qual seu CEP?"
            width="100%"
          />
          <ContainerAddress>
            <Input
              value={street}
              onChangeText={text => this.setState({ street: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Rua"
              width="70%"
            />
            <ContainerNumber>
              <Input
                value={number}
                onChangeText={text => this.setState({ number: text })}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Nº"
                width="100%"
              />
            </ContainerNumber>
          </ContainerAddress>
          <Input
            value={district}
            onChangeText={text => this.setState({ district: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            width="100%"
          />
          <ContainerButton>
            <ButtonNext title="FINALIZAR" onPress={this.handleOrder} />
          </ContainerButton>
        </ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  address: state.address
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CartActions, ...AddressActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
