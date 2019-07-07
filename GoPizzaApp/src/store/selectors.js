// import LoginActions from '~/store/ducks/login';
import { createSelector } from 'reselect';

export const getToken = state => state.login.data.token;
export const getUserId = state => state.login.data.user.id;

export const calculateTotal = createSelector(
  state => state.cart.items,
  (items) => {
    // console.tron.log('Calculou');
    return items.reduce((subtotal, item) => subtotal + item.price, 0);
  },
);
