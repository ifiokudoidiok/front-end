import { userStoriesReducer, pendingStoriesReducer } from './stories';
import { userStoriesStatusReducer, volunteerPlacesStatusReducer, addStoryStatusReducer } from './responses';
import { volunteerPlacesReducer } from './places';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    userStories: userStoriesReducer,
    userStoriesStatus: userStoriesStatusReducer,
    pendingStories: pendingStoriesReducer,
    addStoryStatus: addStoryStatusReducer,
    volunteerPlaces: volunteerPlacesReducer,
    volunteerPlacesStatus: volunteerPlacesStatusReducer
})

export default rootReducer;