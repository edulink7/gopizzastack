import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  loadAddressRequest: ['cep'],
  loadAddressSuccess: ['data'],
  loadAddressFailure: null,
});

export const AddressActionTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  available: false,
  error: false,
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_ADDRESS_REQUEST]: (state, action) => state.merge({ available: false }),
  [Types.LOAD_ADDRESS_SUCCESS]: (state, { data }) => state.merge({ data, available: true, error: false }),
  [Types.LOAD_ADDRESS_FAILURE]: (state, action) => state.merge({ error: true, available: false }),
});
