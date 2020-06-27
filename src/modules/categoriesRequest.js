import {store} from '../store';
import endpoints from '../modules/endpoints';
import {actionGetCategories} from '../actions/categoriesActions';

export default async function fetchCategories(authInfo) {
    const {url, headers} = endpoints.getCategories;
    const {token_type, access_token} = authInfo;
    let response = await fetch(url, {
        headers: {
            ...headers,
            'Authorization': `${token_type} ${access_token}`
        }
    })
    response = await response.json()
    store.dispatch(actionGetCategories(response.categories.items))
    
}