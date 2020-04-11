import {GET_QUOTES, DELETE_QUOTE, ADD_QUOTE} from '../actions/types';

const initialState = {
    quotes: []
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_QUOTES:{
            return {
                ...state
            }
        }

        case DELETE_QUOTE:{
            return{
                ...state,
                quotes: state.quotes.filter((quote) => quote.id !== action.payload)

            }
        }

        case ADD_QUOTE:{
            return{
                ...state,
                quotes: [...state.quotes, action.payload]
            }
        }

        default:
            return state;
    }
}