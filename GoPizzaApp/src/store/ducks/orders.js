import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  loadOrdersRequest: null,
  loadOrdersSuccess: ['data'],
  loadOrdersFailure: null,
  orderSuccess: ['data'],
});

export const OrderActionTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_ORDERS_REQUEST]: (state, action) => state.merge({ loading: true }),
  [Types.LOAD_ORDERS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.LOAD_ORDERS_FAILURE]: (state, action) => state.merge({ error: true, loading: false }),
  [Types.ORDER_SUCCESS]: (state, { data }) => state.merge({ data: [data, ...state.data], loading: false, error: false }),
});
