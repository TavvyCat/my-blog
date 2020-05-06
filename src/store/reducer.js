import * as actionTypes from './actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    blogData: null,
    currentQuote: null,
    previousQuotes: [],
    galleryData: [],
    loading: false,
    adminState: {
        title: "My Blog",
        link: "my-blog",
        content: "Lorem Ipsum...",
        titleImage: "",
        otherImages: [],
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`
    },
    imageUpload: null,
    uploadedImages: [],
    token: null,
    userId: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_BLOG_DATA_SUCCESS:
            return updateObject(state, { blogData: action.data });

        case actionTypes.FETCH_QUOTE_DATA_SUCCESS:
            return updateObject(state, {
                currentQuote: action.currentQuote,
                previousQuotes: action.previousQuotes,
            });

        case actionTypes.FETCH_GALLERY_DATA_SUCCESS:
            return updateObject(state, {galleryData: action.data});

        case actionTypes.CHANGE_ADMIN_STATE:
            return updateObject(state, {adminState: action.newState});
        case actionTypes.CHANGE_IMAGE_UPLOAD:
            return updateObject(state, {imageUpload: action.image});
        case actionTypes.POST_BLOG_SUCCESS:
            alert("Post successful!");
            return updateObject(state, {adminState: {...state.adminState, titleImage: "", otherImages: []}});
        case actionTypes.UPDATE_UPLOADED_IMAGES:
            return updateObject(state, {uploadedImages: state.uploadedImages.push(action.imageURL)})

        case actionTypes.LOG_IN_SUCCESS:
            return updateObject(state, {token: action.token, userId: action.userId})
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, {token: null})
        default: return state;
    }
};

export default reducer;