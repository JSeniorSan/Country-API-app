import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducers";
import thunk from "redux-thunk";
import axios from "axios";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";

const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(axios), ...middleware)
  )
);
