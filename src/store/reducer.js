import * as actionTypes from './actions/actionTypes';

const initialState = {
    blogData: null
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.BLOG_DATA:
            return {}
    }
    return state;
};

export default reducer;