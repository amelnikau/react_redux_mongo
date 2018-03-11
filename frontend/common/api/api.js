import "isomorphic-fetch"

import {LOGIN_URL, SIGN_UP_URL, DECODE_URL, SINGLE_BLOG_URL, ALL_BLOGS_URL} from "../config/config";

function loginPromise(username, password, url) {
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password}),
        method: 'POST'
    }).then(handleErrors).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if (jsonResponse && jsonResponse.token) {
            localStorage.token = jsonResponse.token;
        }
        return {token: jsonResponse.token, username: jsonResponse.username};
    });
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const login = (username, password) => {
    return loginPromise(username, password, LOGIN_URL);
};

const singUp = (username, password) => {
    return loginPromise(username, password, SIGN_UP_URL);
};

const logOut = () => {
    localStorage.removeItem('token');
};

const getUsernameFromToken = (token) => {
    return fetch(DECODE_URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token}),
        method: 'POST'
    }).then(handleErrors).then(response => {
        return response.json();
    });
};

const getBlogs = () => {
    return fetch(ALL_BLOGS_URL)
        .then(handleErrors).then(response => {
        return response.json();
    });
};


const postBlog = (message, author) => {
    return fetch(SINGLE_BLOG_URL, {
        body: JSON.stringify({message, author}),
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.token}`
        }
    }).then(handleErrors).then(response => {
        return response.json();
    });
};

const blogApi = {
    getUsernameFromToken,
    logOut,
    login,
    singUp,
    getBlogs,
    postBlog
};

export default blogApi;

