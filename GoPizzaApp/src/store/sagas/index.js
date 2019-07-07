import {
  all, takeLatest, call, put, select,
} from 'redux-saga/effects';
import api from '~/services/api';
import { navigate } from '~/services/navigation';

// import * as LoginActions from '~/store/actions/login';
// import * as RepositoriesActions from "~/store/actions/repositories";
//import { Creators as LoginActions, Types as LoginTypes } from '~/store/ducks/login';
/* import {
  Creators as RepositoriesActions,
  Types as RepositoriesTypes,
} from '~/store/ducks/repositories'; */

// Login saga
import { LoginActionTypes } from '~/store/ducks/login';
import { login } from './login';

// Signup saga
import { SignupActionTypes } from '~/store/ducks/signup';
import { signup } from './signup';

// Product saga
import { ProductActionTypes } from '~/store/ducks/products';
import { loadProducts, selectProduct } from './products';

//ProductType saga
import { ProductTypesActionTypes } from '~/store/ducks/productTypes';
import { loadTypes } from './productTypes';

//ProductSize saga
import { ProductSizeActionTypes } from '~/store/ducks/productSize';
import { loadSizes } from './productSize';

// Cart Saga 
import { CartActionTypes } from '~/store/ducks/cart';
import { cartOrderRequest } from './cart';

// Profile Orders saga
import { OrderActionTypes } from '~/store/ducks/orders';
import { loadOrders } from './orders';

// Address saga
import { AddressActionTypes } from '~/store/ducks/address';
import { loadAddress } from './address';

/*function* login(action) {
  try {
    const { username } = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess(username));

    navigate('Menu');
  } catch (err) {
    // Setar erro
    yield put(LoginActions.loginFailure());
  }
}*/

/* function* createAccount() {
  navigate('Signup');
} */

/* function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);

    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
} */

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginActionTypes.LOGIN_REQUEST, login),
    takeLatest(SignupActionTypes.SIGNUP_REQUEST, signup),
    takeLatest(ProductActionTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    //takeLatest(ProductActionTypes.SELECT_PRODUCT, selectProduct),
    takeLatest(ProductTypesActionTypes.LOAD_TYPES_REQUEST, loadTypes),
    takeLatest(ProductSizeActionTypes.LOAD_SIZE_REQUEST, loadSizes),
    takeLatest(CartActionTypes.CART_ORDER_REQUEST, cartOrderRequest),
    takeLatest(OrderActionTypes.LOAD_ORDERS_REQUEST, loadOrders),
    takeLatest(AddressActionTypes.LOAD_ADDRESS_REQUEST, loadAddress),
  ]);
}
