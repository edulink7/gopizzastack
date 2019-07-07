import { all, takeLatest } from "redux-saga/effects";

// Login saga
import { LoginActionTypes } from "../ducks/login";
import { login } from "./login";

// Orders saga
import { OrderActionTypes } from "../ducks/orders";
import { loadOrders } from "./orders";

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginActionTypes.LOGIN_REQUEST, login),
    takeLatest(OrderActionTypes.LOAD_ORDERS_REQUEST, loadOrders)
  ]);
}
