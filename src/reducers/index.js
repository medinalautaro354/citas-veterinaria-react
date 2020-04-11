import {combineReducers} from 'redux';
import quoteReducer from './quoteReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    quotes: quoteReducer,
    error: errorReducer
});