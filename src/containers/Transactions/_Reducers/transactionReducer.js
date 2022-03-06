import * as types from '../constants';
import * as utils from '../../../utils';

const initialState = {
  loading: false,
  transactions: [],
  filteredTransactions: [],
  error: '',
  search: '',
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER_BY_VALUE:
      return {
        ...state,
        [action.field]: action.value,
        filteredTransactions: action.searchedData,
      };
    case types.FETCH_TRANSACTION_LIST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        filteredTransactions: action.payload,
        error: '',
      };
    case types.FETCH_TRANSACTION_LIST_FAILURE:
      return {
        ...state,
        transactions: [],
        filteredTransactions: [],
        error: action.payload,
      };
    case types.SORT_DATA_LIST:
      let sortedArr =
        action.value === 'asc'
          ? utils.sortAsc(state.filteredTransactions, 'beneficiary_name')
          : action.value === 'desc'
          ? utils.sortDesc(state.filteredTransactions, 'beneficiary_name')
          : action.value === 'dateAsc'
          ? utils.sortAsc(state.filteredTransactions, 'created_at')
          : utils.sortDesc(state.filteredTransactions, 'created_at');
      return {
        ...state,
        filteredTransactions: sortedArr,
      };
    default:
      return state;
  }
};

export default transactionReducer;
