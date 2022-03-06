//ApplyMidleWare
import env from 'react-native-config';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './Configs_reducer';

const loggerMiddleware = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

export const store =
  env.ENVIRONMENT === 'production'
    ? createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware)),
      )
    : createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
      );

export default store;
