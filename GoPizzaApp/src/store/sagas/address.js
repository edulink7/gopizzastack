import { call, put, select } from 'redux-saga/effects';

import cepApi from '~/services/cepApi';
import AddressActions from '~/store/ducks/address';

export function* loadAddress(action) {
  try {
    const { cep } = action;

    const response = yield call(cepApi.get, `${cep}`);

    yield put(AddressActions.loadAddressSuccess(response.data));
  } catch (err) {
    yield put(AddressActions.loadAddressFailure());
  }
}
