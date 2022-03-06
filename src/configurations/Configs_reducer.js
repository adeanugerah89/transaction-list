import {combineReducers} from 'redux';
import transactionReducer from '../containers/Transactions/_Reducers/transactionReducer';

const SetToastMessage = (state = {}, action) => {
  switch (action.type) {
    case 'TOAST_MESSAGE':
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        duration: action.payload.duration,
        timestamp: Math.floor(Date.now()),
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  ToastMessage: SetToastMessage,
  transactionReducer: transactionReducer,
});
