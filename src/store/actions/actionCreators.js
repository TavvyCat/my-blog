import * as actionTypes from './actionTypes';

export const getImages = (data) => {
    console.log(data);
    return {
        type: actionTypes.BLOG_DATA,
        data: data
    }
}

export const getData = (data) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(getImages(data))
        }, 1000)
    }
    
} 