import { GET_CRYPTOCURRENCY } from '../actions/types';

const initialState = {
  cryptocurrencyData: [],
};

const cryptocurrencyReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CRYPTOCURRENCY:
      return {
        ...state,
        cryptocurrencyData: action.payload
      };
    default:
      return state;
  }
}

export default cryptocurrencyReducer;