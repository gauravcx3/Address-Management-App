import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
    document.getElementById("root")
    );

// export default combineReducers({
//   auth,
//   message,
// });