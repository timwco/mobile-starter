import {createStore, combineReducers} from 'redux';
import reactotron from 'utils/reactotron';

// Import Reducers
import app from 'store/app';

const rootReducer = combineReducers({
  // Combine Here...
  app: app.reducer,
});

const configureStore = () => {
  let store;

  if (__DEV__) {
    store = createStore(rootReducer, reactotron.createEnhancer());
  } else {
    store = createStore(rootReducer);
  }

  return store;
};

export default configureStore;
