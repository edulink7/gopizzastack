import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/**
 * Action Types and Creators
 */
const { Types, Creators } = createActions({
  loginRequest: ["data"],
  loginSuccess: ["data"],
  loginFailure: null
});

export const LoginActionTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false
});

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: (state, action) => state.merge({ loading: true }),
  [Types.LOGIN_SUCCESS]: (state, { data }) =>
    state.merge({ data, loading: false, error: false }),
  [Types.LOGIN_FAILURE]: (state, action) =>
    state.merge({ error: true, loading: false })
});
