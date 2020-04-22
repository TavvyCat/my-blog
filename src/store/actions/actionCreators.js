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
           console.log(error);
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
export const updateUploadedImages = (uploadedImages) => {
    return {
        type: actionTypes.UPDATE_UPLOADED_IMAGES,
        uploadedImages: uploadedImages
    }
}
