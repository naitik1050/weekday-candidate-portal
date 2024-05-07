// reducers.js
import { combineReducers } from 'redux';
import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from './actions';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        // list: action.payload,
        list: [...state.list, ...(action.payload?.jdList || [])],
        loading: false,
        error: null,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  list: listReducer,
});
