import axios from 'axios';
import { apiUrl } from "../../config/constants";
// import {
//   appLoading,
//   appDoneLoading,
//   showMessageWithTimeout,
//   setMessage
// } from "../appState/actions";

export function fetchStoriesSucces(data) {
  return {
    type: 'FETCH_STORIES_SUCCES',
    payload: data
  }
}

export function fetchStoriesById(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepage/stories/${id}`);
    dispatch(fetchStoriesSucces(response.data))
  }
}

export function postStory(name, content, imageUrl) {
  return async (dispatch, getState) => {
    // dispatch(appLoading())
    try {
      const response = await axios.post(`${apiUrl}/homepage/stories`, {
        name,
        content,
        imageUrl
      });
      console.log('response inside postStory thunk: ', response);
    }
    catch (error) {
      console.log('error: ', error)
    }
  }
}