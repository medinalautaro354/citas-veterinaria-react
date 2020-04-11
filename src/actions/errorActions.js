import {SHOW_ERROR} from './types';

export const showError = error =>{
    return {
        type: SHOW_ERROR,
        payload: error
    }
}