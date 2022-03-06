import * as types from '../constants';
import {ServicesAPI} from '../../../API_Services';

export const fetchTransaction = () => {
  return async dispatch => {
    dispatch(fetchTransactionRequest());
    try {
      const {data} = await ServicesAPI.getRequest(`frontend-test`);
      const transactions = Object.values(data);
      dispatch(fetchTransactionSuccess(transactions));
    } catch (error) {
      dispatch(fetchTransactionFailure(error.message));
    }
  };
};

export const fetchTransactionRequest = () => {
  return {
    type: types.FETCH_TRANSACTION_LIST,
  };
};

export const fetchTransactionSuccess = transactions => {
  return {
    type: types.FETCH_TRANSACTION_LIST_SUCCESS,
    payload: transactions,
  };
};

export const fetchTransactionFailure = error => {
  return {
    type: types.FETCH_TRANSACTION_LIST_FAILURE,
    payload: error,
  };
};

export const filterByValue = (field, value) => {
  return async (dispatch, getState) => {
    const {transactions} = getState().transactionReducer;
    const searchedData = !!value
      ? searching(transactions, value)
      : transactions;

    dispatch({
      type: types.FILTER_BY_VALUE,
      field,
      value,
      searchedData,
    });
  };
};

const searching = (data, textInput) => {
  if (!textInput) return data;

  return data.filter(item => {
    const textInputLower = textInput.toLowerCase();
    return (
      (item.beneficiary_name.toLowerCase().includes(textInputLower) ||
        item.beneficiary_bank.toLowerCase().includes(textInputLower) ||
        item.sender_bank.toLowerCase().includes(textInputLower)) &&
      item
    );
  });
};

export const sortBy = value => {
  return {
    type: types.SORT_DATA_LIST,
    value,
  };
};
