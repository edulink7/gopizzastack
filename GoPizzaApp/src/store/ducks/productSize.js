import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  loadSizeRequest: ['id'],
  loadSizeSuccess: ['data'],
  loadSizeFailure: null,
});

export const ProductSizeActionTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false,
  type_id: 0,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SIZE_REQUEST]: (state, { id }) => state.merge({ type_id: id, loading: true }),
  [Types.LOAD_SIZE_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.LOAD_SIZE_FAILURE]: (state, action) => state.merge({ error: true, loading: false }),
});
