import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';

import LoginActions from '~/store/ducks/login';

export function* login(action) {
  try {
    const { data } = action;
    const response = yield call(api.post, 'login/app', data);

    yield put(LoginActions.loginSuccess(response.data));
    navigate('Menu');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}
