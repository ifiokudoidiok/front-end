import * as types from '../types';
import withAuth from '../../utils/axios';



axios.defaults.baseURL = 'https://bw-refugee-stories.herokuapp.com/';

const action = (type, payload) => {
    return {
        type,
        payload
    }
}

export const getUserStories = () => dispatch => {
    axios.get('/api/stories')
        .then(response => {
            dispatch(action(types.GET_USER_STORIES, response.data));
        })
        .catch(error => console.log(error))
}

export const getPendingStories = () => dispatch => {
    withAuth().get('/api/admin/stories')
        .then(response => {
            dispatch(action(types.GET_PENDING_STORIES, response.data));
        })
        .catch(error => console.log(error))
}

export const addStory = (story) => dispatch => {
    axios.post('/api/stories', story)
        .then(res => {
            dispatch(action(types.ADD_A_STORY, null));
        })
        .catch(error => console.log(error))
}

export const approveStory = (id, story) => dispatch => {
    withAuth().post(` /api/admin/stories/approve/${id}`, story)
        .then(res => {
            dispatch(action(types.APPROVE_STORY, null));
        })
        .catch(error => console.log(error))
}

export const rejectStory = (id) => dispatch => {
    withAuth().delete(` /api/admin/stories/reject/${id}`)
        .then(res => {
            dispatch(action(types.REJECT_STORY, null));
        })
        .catch(error => console.log(error))
}

export const deleteStory = (id) => dispatch => {
    withAuth().delete(` /api/admin/stories/delete/${id}`)
        .then(res => {
            dispatch(action(types.DELETE_STORY, null));
        })
        .catch(error => console.log(error))
}