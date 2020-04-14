import * as actionTypes from './actions/actionTypes';
import { updateObject } from './utility';

const initialState = {
    blogData: null,
    currentQuote: null,
    previousQuotes: [],
    galleryData: [],
    loading: false,
    blogSubmission: {
        
    }
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
            return updateObject(state, { galleryData: action.data })
        default: return state;
    }
};

export default reducer;