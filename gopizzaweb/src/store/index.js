import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Reducers
// import rootReducer from "./reducers";
// Duck pattern use only ducks instead of reducers and actions folder
import rootReducer from "./ducks";
import rootSaga from "./sagas";

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
