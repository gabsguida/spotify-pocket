import {GET_CATEGORIES} from './types';

export const actionGetCategories = (categories) => {
    return{
        type: GET_CATEGORIES,
        categories: categories
    }
}