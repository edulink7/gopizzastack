import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  cartAddProduct: ['item'],
  cartRemoveProduct: ['id'],
  cartOrderRequest: ['data'],
  cartOrderSuccess: ['data'],
  cartOrderFailure: null,
});

export const CartActionTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  items: [],
  loading: false,
  error: false,
  sequencer: 0,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CART_ADD_PRODUCT]: (state, action) => state.merge({ items: [...state.items, action.item], sequencer: state.sequencer + 1 }),
  [Types.CART_REMOVE_PRODUCT]: (state, action) => state.merge({ items: state.items.filter(item => item.id !== action.id) }),
  [Types.CART_ORDER_REQUEST]: (state, action) => state.merge({ loading: true }),
  [Types.CART_ORDER_SUCCESS]: (state, { data }) => state.merge({ items: [], loading: false, error: false }),
  [Types.CART_ORDER_FAILURE]: (state, action) => state.merge({ error: true, loading: false }),
});
