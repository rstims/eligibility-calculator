
import {
  createStore,
  combineReducers
}                        from 'redux';
import { appReducer }  	 from './reducers';

const store = createStore(combineReducers({
  //App reducer
  app: appReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;