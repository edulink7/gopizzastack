import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import api from '~/services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductActions from '~/store/ducks/products';

import {
  View, Text, ActivityIndicator, FlatList, Image, StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Header from '~/components/Header';

import MenuItem from './MenuItem';
import {
  Container,
  Header,
  HeaderContainer,
  Profile,
  Title,
  Cart,
  Refresh,
  ContentContainer,
  MenuList,
  Error,
} from './styles';

class Menu extends Component {
  async componentDidMount() {
    const { loadProductsRequest } = this.props;

    loadProductsRequest();
  }

  handleAddProduct = (product) => {
    const {  navigation, selectProduct } = this.props;
    const { id } = product;

    selectProduct(id);

    navigation.navigate('ProductTypes', { product });
  };

  handleProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  };

  handleCart = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart', { data: { adding: false }});
  };

  /* loadProducts = async () => {
    this.setState({ loading: true, refreshing: true });
    // const username = await AsyncStorage.getItem('@Githuber:username');
    // const { data } = await api.get(`/users/${username}/repos`);

    // this.setState({ data, loading: false, refreshing: false });
    this.setState({ loading: false, refreshing: false });
  }; */

  renderListItem = ({ item }) => <MenuItem product={item} onPress={() => this.handleAddProduct(item)} />;

  renderList = () => {
    const { products, loadProductsRequest } = this.props;

    // console.tron.log('Render List: ', products.data);

    return (
      <MenuList
        data={products.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={loadProductsRequest}
        refreshing={products.loading}
      />
    );
  };

  render() {
    const { loading, error } = this.props.products;
    const { cartCount } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
        <HeaderContainer>
          <Header>
            <Profile onPress={this.handleProfile}>
              <Icon name="history" size={24} color="#fff" />
            </Profile>
            <Title>Pizzaria Don Juan</Title>
            <Cart onPress={this.handleCart}>
              {cartCount > 0 && <Text>{cartCount}</Text>}
              <Image source={require('~/images/menu/bag.png')} />
            </Cart>
          </Header>
        </HeaderContainer>
        {error && (
          <Error>
            Não foi possível carregar os produtos :(
            {'\n'}
            Deslize para baixo para atualizar
          </Error>
        )}
        <ContentContainer>{loading ? <Refresh /> : this.renderList()}</ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cartCount: state.cart.items.length
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
