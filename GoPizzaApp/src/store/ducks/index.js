import { combineReducers } from 'redux';

// import login from './login';
import { reducer as login } from './login';
import { reducer as signup } from './signup';
import { reducer as products } from './products';
import { reducer as productTypes } from './productTypes';
import { reducer as productSize } from './productSize';
import { reducer as orders } from './orders';
import { reducer as cart } from './cart';
import { reducer as address } from './address';

export default combineReducers({
  login,
  signup,
  products,
  productTypes,
  productSize,
  orders,
  cart,
  address,
});
