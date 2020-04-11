import {ADD_QUOTE, GET_QUOTES, DELETE_QUOTE} from './types';

export const getQuotes = () =>{
    return {
        type: GET_QUOTES
    }
}

export const addQuote = (quote) =>{
    return {
        type: ADD_QUOTE,
        payload: quote
    }
}

export const deleteQuote = (id) =>{
    return{
        type: DELETE_QUOTE,
        payload: id
    }
}