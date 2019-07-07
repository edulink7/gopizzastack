import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import api from '~/services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductSizeActions from '~/store/ducks/productSize';

import {
  View, Text, ActivityIndicator, FlatList, Image, StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';

import SizeItem from './SizeItem';
import {
  Container, Refresh, ContentContainer, SizeList, Error,
} from './styles';

class ProductSize extends Component {
  state = {
    
  };

  async componentDidMount() {
    const { navigation, loadSizeRequest } = this.props;
    const { id } = navigation.getParam('productType');

    console.tron.log("Loading sizes of type: ", id);
    loadSizeRequest(id);
  }


  handleAddToCart = (item) => {
    const { navigation } = this.props;
    const productType = navigation.getParam('productType');

    const cartItem = {
      item_id: item.id,
      name: 'Pizza' + productType.name,
      description: `${item.description} ${item.name}`,
      price: item.price,
      preview: (item.use_as_cart_img ? item.preview : productType.preview)
    }

    navigation.navigate('Cart', { data: { adding: true, item: cartItem } });
  };

  handlePrevious = () => {
    const { navigation } = this.props;
    navigation.navigate('ProductTypes');
  };

  /*loadTypes = async () => {
    this.setState({ loading: true, refreshing: true });
    // const username = await AsyncStorage.getItem('@Githuber:username');
    // const { data } = await api.get(`/users/${username}/repos`);

    // this.setState({ data, loading: false, refreshing: false });
    this.setState({ loading: false, refreshing: false });
  };*/

  renderListItem = ({ item }) => <SizeItem product={item} onPress={() => this.handleAddToCart(item)} />;

  renderList = () => {
    //const { data, refreshing } = this.state;
    // console.tron.log('Render List: ', data);
    const { productSize, loadSizeRequest, navigation } = this.props;
    const { id } = navigation.getParam('productType');

    return (
      <SizeList
        data={productSize.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={() => loadSizeRequest(id)}
        refreshing={productSize.loading}
      />
    );
  };

  render() {
    //const { loading } = this.state;
    const { loading, error } = this.props.productSize;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
        <Header title="Selecione um tamanho" handlePrevious={this.handlePrevious} />
        {error && (
          <Error>
            {'Não foi possível carregar os produtos :(\nDeslize para baixo para atualizar'}
          </Error>
        )}
        <ContentContainer>{loading ? <Refresh /> : this.renderList()}</ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productSize: state.productSize,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductSizeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductSize);
