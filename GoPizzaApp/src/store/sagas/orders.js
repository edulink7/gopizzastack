import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import OrderActions from '~/store/ducks/orders';
import { getToken, getUserId } from '~/store/selectors';

export function* loadOrders() {
  try {
    const token = yield select(getToken);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    };

    const userId = yield select(getUserId);

    const response = yield call(api.get, `orders/${userId}`, { headers });

    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (err) {
    yield put(OrderActions.loadOrdersFailure());
  }
}
