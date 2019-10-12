import { GET_CRYPTOCURRENCY } from './types';

export const getCryptocurrencies = (cryptocurrency) => {
  return {
    type: GET_CRYPTOCURRENCY,
    payload: cryptocurrency
  }
}