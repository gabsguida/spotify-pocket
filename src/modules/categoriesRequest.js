import {store} from '../store';
import endpoints from '../modules/endpoints';
import {actionGetCategories} from '../actions/categoriesActions';

export default async function fetchCategories(authInfo) {
    const {url, headers} = endpoints.getCategories;
    const {tokenType, accessToken} = authInfo;
    let response = await fetch(url, {
        headers: {
            ...headers,
            'Authorization': `${tokenType} ${accessToken}`
        }
    })
    response = await response.json()
    store.dispatch(actionGetCategories(response.categories.items))
    
}