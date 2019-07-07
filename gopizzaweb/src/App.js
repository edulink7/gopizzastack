import "./config/ReactotronConfig";

import React, { Component } from "react";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/global";

//import AsyncStorage from '@react-native-community/async-storage';

import store from "./store";

import Routes from "./routes";
console.tron.log("Hello");

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
