import { userStoriesReducer, pendingStoriesReducer } from './stories';
import { userStoriesStatusReducer, addStoryStatusReducer } from './responses';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    userStories: userStoriesReducer,
    userStoriesStatus: userStoriesStatusReducer,
    pendingStories: pendingStoriesReducer,
    addStoryStatus: addStoryStatusReducer
})

export default rootReducer;