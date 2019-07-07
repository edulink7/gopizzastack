import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import api from '~/services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';
import { calculateTotal } from '~/store/selectors'

import {
  View, Text, FlatList, Image, StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';
import ButtonNext from '~/components/ButtonNext';

import CartItem from './CartItem';
import {
  Container, CartList, FooterContainer, ButtonAdd, ContentContainer,
} from './styles';

class Cart extends Component {
  state = {
    idSequence: 0,
    loading: false,
  };

  async componentDidMount() {
    const { navigation, cartAddProduct, cart } = this.props;

    const data = navigation.getParam('data');

    console.tron.log("Cart:", data);
    if(data.adding === true){
      //let nextId = this.state.idSequence + 1;
      let { item } = data;
      item.id = cart.sequencer;
      cartAddProduct(item);
    }
  }

  /* loadProducts = async () => {
    this.setState({ loading: true, refreshing: true });
    // const username = await AsyncStorage.getItem('@Githuber:username');
    // const { data } = await api.get(`/users/${username}/repos`);

    // this.setState({ data, loading: false, refreshing: false });
    this.setState({ loading: false, refreshing: false });
  }; */

  handleAddMore = () => {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  };

  handleOrder = () => {
    const { navigation, total } = this.props;
    navigation.navigate('Order', { total });
  };

  handlePrevious = () => {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  };

  handleRemove = id => {
    const { cartRemoveProduct } = this.props;

    console.tron.log("Remove:", id);
    cartRemoveProduct(id);
  }

  renderListItem = ({ item }) => <CartItem product={item} onRemove={() => this.handleRemove(item.id)} />;

  renderList = () => {
    const { cart } = this.props;
     console.tron.log('Render List: ', cart);

    return (
      <CartList
        data={cart.items}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    // const { loading } = this.state;
    const { total, cart } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
        <Header title="Carrinho" handlePrevious={this.handlePrevious} details={`R$${total.toFixed(2)}`} />
        <ContentContainer>
          {this.renderList()}

          <FooterContainer>
            <ButtonAdd onPress={this.handleAddMore}>
              <Icon name="cart-plus" size={20} color="#666" />
            </ButtonAdd>
          { cart.items.length > 0 &&
          <ButtonNext title="REALIZAR PEDIDO" onPress={this.handleOrder} /> }
          </FooterContainer>
        </ContentContainer>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  cart: state.cart,
  total: calculateTotal(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
