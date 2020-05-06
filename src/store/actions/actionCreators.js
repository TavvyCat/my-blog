import * as actionTypes from './actionTypes';
import Axios from '../../Axios';
import axios from 'axios';

// BLOG DATA
export const fetchBlogDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_BLOG_DATA_SUCCESS,
        data: data
    }
}
export const fetchBlogData = () => {
    return dispatch => {
        Axios.get('/blog.json')
        .then(response => {
            const data = [];
            for (let blog in response.data) {
                data.push({
                    ...response.data[blog]
                })
                }
            dispatch(fetchBlogDataSuccess(data));
        })
        .catch(error => console.log(error));
    }
}

// QUOTE DATA
export const fetchQuoteDataSuccess = (currentQuote, previousQuotes) => {
    return {
        type: actionTypes.FETCH_QUOTE_DATA_SUCCESS,
        currentQuote: currentQuote,
        previousQuotes: previousQuotes
    }
}
export const fetchQuoteData = () => {
    return dispatch => {
        Axios.get('/quotes.json')
        .then(response => {
            const currentQuote = {...response.data.currentQuote};
            const previousQuotes = [];
            for (let key in response.data.previousQuotes) {
            previousQuotes.push({
                ...response.data.previousQuotes[key],
                id: key
            });
            };
            dispatch(fetchQuoteDataSuccess(currentQuote, previousQuotes))
        })
        .catch(error => console.log(error));
        }
}

// GALLERY DATA
export const fetchGalleryDataSuccess = (images) => {
    return {
        type: actionTypes.FETCH_GALLERY_DATA_SUCCESS,
        data: images
    }
}
export const fetchGalleryData = () => {
    return dispatch => {
        Axios.get('/Gallery.json')
        .then(response => {
            const images = [];
            for (let key in response.data) {
                images.push({
                    ...response.data[key]
            })};
        dispatch(fetchGalleryDataSuccess(images));
    })
        .catch(error => console.log(error))
    }
}

// POST BLOG
export const postBlogSuccess = () => {
    return {
        type: actionTypes.POST_BLOG_SUCCESS
    }
}
export const postBlog = (blogData) => {
    return dispatch => {
       Axios.post(`/blog.json`, blogData)
       .then(response => {
           if (response.status >= 200) {
               dispatch(postBlogSuccess());
           }
       })
       .catch(error => {
           console.log(error.response.data.error);
       });
    }
}

// ADMIN STATE
export const changeAdminState = (newState) => {
    return {
        type: actionTypes.CHANGE_ADMIN_STATE,
        newState: newState
    }
}
export const changeImageUpload = (image) => {
    return {
        type: actionTypes.CHANGE_IMAGE_UPLOAD,
        image: image
    }
}
export const updateUploadedImages = (imgURL) => {
    return {
        type: actionTypes.UPDATE_UPLOADED_IMAGES,
        imgURL: imgURL
    }
}

// Authorization
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const checkLoginTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, +expirationTime * 1000)
    };
}
export const loginSuccess = (token, userId) => {
    return {
        type: actionTypes.LOG_IN_SUCCESS,
        token: token,
        userId: userId
    }
}
export const checkLoginState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(loginSuccess(token, userId));
                dispatch(checkLoginTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}
export const login = (email, password) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5UiiS5fTo0PWQ0p5puIouAXOglOG5QuA', authData)
        .then(response => {
            const token = response.data.idToken;
            const userId = response.data.localId;
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(loginSuccess(token, userId));
            dispatch(checkLoginTimeout(response.data.expiresIn));
            console.log(response);
        })
        .catch(error => {
            alert(error.response.data.error)
        });
    }
}