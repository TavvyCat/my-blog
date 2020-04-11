import * as actionTypes from './actionTypes';
import Axios from '../../Axios';

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