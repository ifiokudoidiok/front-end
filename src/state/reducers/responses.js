import * as types from '../types';


const initialResolvedState = false;
export const resolvedReducer = (state = initialResolvedState, actions) => {
    switch(actions.type) {
        case types.REQUEST_WAS_RESOLVED:
            return actions.payload;
        default:
            return state
    }
}

const initialErrorState = {
    status: false,
    message: ''
};
export const errorReducer = (state = initialErrorState, actions) => {
    switch(actions.type) {
        case types.REQUEST_ENDED_IN_ERROR:
            return {
                status: actions.payload.status,
                message: actions.payload.message
            };
        default:
            return state
    }
}