import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import api from '~/services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductTypeActions from '~/store/ducks/productTypes';

import {
  View, Text, ActivityIndicator, FlatList, Image, StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';

import TypeItem from './TypeItem';
import {
  Container, Refresh, ContentContainer, TypeList, Error,
} from './styles';

class ProductType extends Component {
  state = {};

  async componentDidMount() {
    const { loadTypesRequest, navigation, product_id } = this.props;
    //const { id } = navigation.getParam('product');

    console.tron.log("Loading types of product: ", product_id);
    loadTypesRequest(product_id);
  }

  handleAddType = (productType) => {
    const { navigation } = this.props;
    navigation.navigate('ProductSize', { productType });
  };

  handlePrevious = () => {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  };

  /*loadTypes = async () => {
    this.setState({ loading: true, refreshing: true });
    // const username = await AsyncStorage.getItem('@Githuber:username');
    // const { data } = await api.get(`/users/${username}/repos`);

    // this.setState({ data, loading: false, refreshing: false });
    this.setState({ loading: false, refreshing: false });
  };*/

  renderListItem = ({ item }) => <TypeItem product={item} onPress={() => this.handleAddType(item)} />;

  renderList = () => {
    //const { data, refreshing } = this.state;
    // console.tron.log('Render List: ', data);
    const { productTypes, loadTypesRequest, navigation, product_id } = this.props;
    //const { id } = navigation.getParam('product');

    //console.tron.log("Loading types of product: ", id);
    
    return (
      <TypeList
        data={productTypes.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={() => loadTypesRequest(product_id)}
        refreshing={productTypes.loading}
      />
    );
  };

  render() {
    const { loading, error } = this.props.productTypes;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
        <Header title="Selecione um tipo" handlePrevious={this.handlePrevious} />
        {error && (
          <Error>
            {`Não foi possível carregar os produtos :(\nDeslize para baixo para atualizar`}
          </Error>
        )}
        <ContentContainer>{loading ? <Refresh /> : this.renderList()}</ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  productTypes: state.productTypes,
  product_id: state.products.product_id,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductTypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductType);
