import { createStore, combineReducers } from 'redux';
import cryptocurrencyReducer from './src/reducers/cryptocurrencyReducer';

const rootReducer = combineReducers({
    cryptocurrencyReducer
});

const configureStore = createStore(rootReducer);

export default configureStore;