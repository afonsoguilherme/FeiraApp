import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './ducks';


const middlewares = [];

const persistConfig = {
  key: 'feiraapp',
  storage: AsyncStorage,
  whitelist: ['shoppingCart', 'user', 'products'],
  timeout: null,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

export {
  store,
  persistor,
};