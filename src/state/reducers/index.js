import * as reducers from './stories';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    userStories: reducers.userStoriesReducer,
    pendingStories: reducers.pendingStoriesReducer
})

export default rootReducer;