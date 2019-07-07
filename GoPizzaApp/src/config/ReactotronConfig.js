import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// Set it up only when developing
if (__DEV__) {
  // Add the host of the machine running Reactotron when connecting from
  // an emulator in a virtual machine
  const tron = Reactotron.configure({ host: '192.168.0.11' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  // Add it to our console
  console.tron = tron;

  // Clear on every new run
  tron.clear();
}
