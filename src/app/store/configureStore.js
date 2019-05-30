import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";

export const configureStore = preloadedState => {
  const middleWares = [];
  const middleWareEnhancer = applyMiddleware(...middleWares);

  const storeEnhancers = [middleWareEnhancer];

  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};
