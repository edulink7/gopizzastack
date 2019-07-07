import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import ProductTypesActions from '~/store/ducks/productTypes';
import { getToken } from '~/store/selectors';

export function* loadTypes(action) {
  try {
    const { id } = action;
    console.tron.log('Requesting Types of Product id:', id);

    const token = yield select(getToken);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    };

    const response = yield call(api.get, `products/types/${id}`, { headers });
    // const response = yield call(api.get, 'types');

    console.tron.log('Types:', response.data);

    yield put(ProductTypesActions.loadTypesSuccess(response.data));
  } catch (err) {
    yield put(ProductTypesActions.loadTypesFailure());
  }
}
