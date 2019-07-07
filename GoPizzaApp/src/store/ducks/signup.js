import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  signupRequest: ['data'],
  signupSuccess: ['data'],
  signupFailure: null,
});

export const SignupActionTypes = Types;
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
  [Types.SIGNUP_REQUEST]: (state, action) => state.merge({ loading: true }),
  [Types.SIGNUP_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.SIGNUP_FAILURE]: (state, action) => state.merge({ error: true, loading: false }),
});
