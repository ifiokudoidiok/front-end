import {userStoriesReducer, pendingStoriesReducer } from './stories';
import { resolvedReducer, errorReducer } from './responses';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    userStories: userStoriesReducer,
    pendingStories: pendingStoriesReducer,
    resolved: resolvedReducer,
    error: errorReducer
})

export default rootReducer;