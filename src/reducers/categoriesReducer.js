import {GET_CATEGORIES} from '../actions/types';

const initialCategoriesState = {
    categories: [],
    loading: true
}

export default function categoriesReducer(state=initialCategoriesState, action){
    switch(action.type){
        case GET_CATEGORIES:
            return{
                categories: action.categories,
                loading: false
            }
        default: return state;
    }
}