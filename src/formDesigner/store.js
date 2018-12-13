import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, enhancer);

if (module.hot) {
  // Enable webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
