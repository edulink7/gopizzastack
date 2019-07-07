import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import ProductActions from '~/store/ducks/products';
// import LoginActions from '~/store/ducks/login';

import { getToken } from '~/store/selectors';

export function* loadProducts() {
  try {
    const token = yield select(getToken);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    };

    const response = yield call(api.get, 'products', { headers });

    yield put(ProductActions.loadProductsSuccess(response.data));
  } catch (err) {
    yield put(ProductActions.loadProductsFailure());
  }
}

/* export function* selectProduct(action) {
  const { id } = action;
  yield put(ProductActions.selectProduct(id));
}
*/
