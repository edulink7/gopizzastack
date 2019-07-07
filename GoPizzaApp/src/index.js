import '~/config/ReactotronConfig';
// import '~/config/DevToolsConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';

import store from './store';

// import Routes from "./routes";
import createNavigator from './routes';

import { setNavigator } from './services/navigation';

class App extends Component {
  state = { userChecked: false, userLogged: false };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');

    this.setState({
      userChecked: true,
      userLogged: !!username,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    );
  }
}

export default App;
