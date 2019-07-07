import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import { colors } from '~/styles';
import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Menu from '~/pages/Menu';
import ProductTypes from '~/pages/ProductTypes';
import ProductSize from '~/pages/ProductSize';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';
import Profile from '~/pages/Profile';

// Checks if the user is logged (default is false)
const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Signup,
      Menu,
      ProductTypes,
      ProductSize,
      Cart,
      Order,
      Profile,
    },
    {
      initialRouteName: userLogged ? 'Menu' : 'Login',
    },
  ),
);

export default Routes;
