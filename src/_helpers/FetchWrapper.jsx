
import { store} from '../_store';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }

        return fetch(url, requestOptions).then(result => handleResponse(result));
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const token = authToken();
    const isLoggedIn = !!token;
    const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${token}` };
    } else {
        return {};
    }
}

function authToken() {
    return store.getState().auth.user?.token;
}

function handleResponse(response) {
    //вариант для реального бэкенда
    // const resultStatus = response.status
    // if(resultStatus == 200) {
    //     return response.text().then(text => {
    //         const data = text && JSON.parse(text);
    //         if (data === "") {
    //             const error = (data && data.message) || response.statusText;
    //             return Promise.reject(error);
    //         }
    //         return data;
    //     });
    // }
    if(response.ok) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            if (data === "") {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    }
    else {
        const error = response.statusText;
        return Promise.reject(error);
    };
}