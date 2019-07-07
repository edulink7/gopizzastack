import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
// import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  HeaderImage,
  HeaderContainer,
  ContainerLeft,
  Title,
  Previous,
  TextRight,
} from './styles';

class Header extends Component {
  /* static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }; */

  /* signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.clear();

    navigation.navigate('Welcome');
  }; */

  render() {
    const { title, details, handlePrevious } = this.props;

    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#0B2031" />
        <HeaderContainer>
          <HeaderImage>
            <ContainerLeft>
              <Previous onPress={handlePrevious}>
                <Icon name="navigate-before" size={20} color="#fff" />
              </Previous>
              <Title>{title}</Title>
            </ContainerLeft>
            <TextRight>{details}</TextRight>
          </HeaderImage>
        </HeaderContainer>
      </Container>
    );
  }
}

export default withNavigation(Header);
