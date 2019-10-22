import axios from 'axios';
import * as types from '../types';
import withAuth from '../../utils/axios';


axios.defaults.baseURL = 'https://bw-refugee-stories.herokuapp.com/';


export const getUserStories = () => dispatch => {
    axios.get('/api/stories')
        .then(response => {
            dispatch({
                type: types.GET_USER_STORIES, 
                payload: response.data
            });
        })
        .catch(error => console.log(error))
}

export const getPendingStories = () => dispatch => {
    withAuth().get('/api/admin/stories')
        .then(response => {
            dispatch({
                type: types.GET_PENDING_STORIES, 
                payload: response.data
            });
        })
        .catch(error => console.log(error))
}

export const addStory = (story) => async dispatch => {
    requestResolved();

    await axios.post('/api/stories', story)
        .then(res => {
            dispatch({
                type: types.ADD_A_STORY
            });
            dispatch({
                type: types.REQUEST_WAS_RESOLVED, 
                payload: true
            })
            console.log(res)
        })
        .catch(error => {
            dispatch({
                type: types.REQUEST_ENDED_IN_ERROR, 
                payload: {
                    status: true,
                    message: error
                }
            })
        })
}
  

export const approveStory = (id, story) => dispatch => {
    withAuth().post(` /api/admin/stories/approve/${id}`, story)
        .then(res => {
            dispatch({
                type: types.APPROVE_STORY
            });
        })
        .catch(error => console.log(error))
}

export const rejectStory = (id) => dispatch => {
    withAuth().delete(` /api/admin/stories/reject/${id}`)
        .then(res => {
            dispatch({
                type: types.REJECT_STORY
            });
        })
        .catch(error => console.log(error))
}

export const deleteStory = (id) => dispatch => {
    withAuth().delete(` /api/admin/stories/delete/${id}`)
        .then(res => {
            dispatch({
                type: types.DELETE_STORY
            });
        })
        .catch(error => console.log(error))
}