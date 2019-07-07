import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import ProductSizeActions from '~/store/ducks/productSize';
import { getToken } from '~/store/selectors';

export function* loadSizes(action) {
  try {
    const { id } = action;
    console.tron.log('Type id:', id);

    const token = yield select(getToken);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    };

    const response = yield call(api.get, `products/sizes/${id}`, { headers });
    // const response = yield call(api.get, 'sizes');

    // console.tron.log('Size:', response.data);

    yield put(ProductSizeActions.loadSizeSuccess(response.data));
  } catch (err) {
    yield put(ProductSizeActions.loadSizeFailure());
  }
}
