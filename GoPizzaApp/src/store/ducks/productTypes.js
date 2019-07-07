import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  loadTypesRequest: ['id'],
  loadTypesSuccess: ['data'],
  loadTypesFailure: null,
});

export const ProductTypesActionTypes = Types;
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
  [Types.LOAD_TYPES_REQUEST]: (state, { id }) => state.merge({ product_id: id, loading: true }),
  [Types.LOAD_TYPES_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.LOAD_TYPES_FAILURE]: (state, action) => state.merge({ error: true, loading: false }),
});
