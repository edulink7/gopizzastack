import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import OrderActions from "../ducks/orders";
import { getToken } from "../selectors";

export function* loadOrders(action) {
  try {
    const token = yield select(getToken);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    };

    //const userId = yield select(getUserId);
    const { data } = action;
    console.tron.log("Orders", data);

    const response = yield call(api.post, `orders`, data, { headers });

    yield put(OrderActions.loadOrdersSuccess(response.data));
  } catch (err) {
    yield put(OrderActions.loadOrdersFailure());
  }
}
