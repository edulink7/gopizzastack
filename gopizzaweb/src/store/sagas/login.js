import { call, put } from "redux-saga/effects";
import api from "../../services/api";
//import { navigate } from "~/services/navigation";

import LoginActions from "../ducks/login";

export function* login(action) {
  try {
    const { data } = action;
    console.tron.log("Login saga", data);

    const response = yield call(api.post, "login/web", data);

    yield put(LoginActions.loginSuccess(response.data));
    //navigate("Menu");
  } catch (err) {
    console.tron.log("Login err", err);

    yield put(LoginActions.loginFailure());
  }
}
