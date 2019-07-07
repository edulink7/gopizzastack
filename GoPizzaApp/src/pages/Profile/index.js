import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import api from '~/services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/orders';

import {
  View, Text, ActivityIndicator, FlatList, Image, StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';

import ProfileItem from './ProfileItem';
import {
  Container, Refresh, ContentContainer, ProfileList, Error,
} from './styles';

class Profile extends Component {
  state = {};

  async componentDidMount() {
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();
  }

  handlePrevious = () => {
    const { navigation } = this.props;
    navigation.navigate('Menu');
  };

  /* loadOrders = async () => {
    this.setState({ loading: true, refreshing: true });
    // const username = await AsyncStorage.getItem('@Githuber:username');
    // const { data } = await api.get(`/users/${username}/repos`);

    // this.setState({ data, loading: false, refreshing: false });
    this.setState({ loading: false, refreshing: false });
  }; */

  renderListItem = ({ item }) => <ProfileItem order={item} />;

  renderList = () => {
    //const { data, refreshing } = this.state;
    // console.tron.log('Render List: ', data);
    const { orders, loadOrdersRequest } = this.props;

    return (
      <ProfileList
        data={orders.data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={loadOrdersRequest}
        refreshing={orders.loading}
      />
    );
  };

  render() {
    const { loading, error } = this.props.orders;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
        <Header title="Meus pedidos" handlePrevious={this.handlePrevious} />
        {error && (
          <Error>
            Não foi possível carregar os pedidos :(
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
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
