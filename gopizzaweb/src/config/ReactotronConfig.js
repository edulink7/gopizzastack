import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";
import reactotronSaga from "reactotron-redux-saga";

// Set it up only when developing
if (process.env.NODE_ENV === "development") {
  const tron = Reactotron.configure() // controls connection & communication settings
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect(); // let's connect!

  // Add it to our console
  console.tron = tron;

  // Clear on every new run
  tron.clear();
}
