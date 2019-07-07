import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  loadProductsRequest: null,
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
  selectProduct: ['id'],
});

export const ProductActionTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false,
  product_id: 0,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_REQUEST]: (state, action) => state.merge({ loading: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.LOAD_PRODUCTS_FAILURE]: (state, action) => state.merge({ error: true, loading: false }),
  [Types.SELECT_PRODUCT]: (state, { id }) => state.merge({ product_id: id }),
});

// Types: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }

/**
 * loadRequest: () => ({ type: 'LOAD_SUCESS' })
 * loadSuccess: (data) => ({ type: 'LOAD_SUCESS', data })
 * loadFailure: () => ({ type: 'LOAD_FAILURE' })
 */

/* Reducer before sauce
 function reducer(state, action) {
   switch (action.type) {
     case 'LOAD_REQUEST':
       return { ...state, loading: true };
   }
 }
*/
