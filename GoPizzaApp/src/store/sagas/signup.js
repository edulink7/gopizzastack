import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';

import SignupActions from '~/store/ducks/signup';

export function* signup(action) {
  try {
    const { data } = action;
    console.tron.log(data);
    // const response = yield call(api.post, { url: 'signup', data });
    const response = yield call(api.post, 'signup', data);

    yield put(SignupActions.signupSuccess(response.data));
    navigate('Login');
  } catch (err) {
    yield put(SignupActions.signupFailure());
  }
}
