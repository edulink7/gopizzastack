import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import CartActions from '~/store/ducks/cart';
import OrderActions from '~/store/ducks/orders';

import { getToken, getUserId } from '~/store/selectors';
import { navigate } from '~/services/navigation';

export function* cartOrderRequest(action) {
  try {
    const { data } = action;
    const token = yield select(getToken);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    };

    const user_id = yield select(getUserId);
    data.user_id = user_id;
    console.tron.log('Ordering: ', data);
    const response = yield call(api.post, 'order', data, { headers });

    yield put(CartActions.cartOrderSuccess(response.data));
    yield put(OrderActions.orderSuccess(response.data));
    navigate('Profile');
  } catch (err) {
    yield put(CartActions.cartOrderFailure());
  }
}
