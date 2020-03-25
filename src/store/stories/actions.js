import axios from 'axios';
import { apiUrl } from "../../config/constants";
import { selectToken } from '../user/selectors';
import { selectHomepageId } from '../homeDetails/selectors';
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

export function postStorySucces(data) {
  return {
    type: 'POST_STORY_SUCCES',
    payload: data
  }
}

export function postStory(name, content, imageUrl) {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    const id = selectHomepageId(getState());
    console.log('homepage id in postStory thunk: ', id);
    try {
      const response = await axios.post(`${apiUrl}/homepage/stories`, {
        name,
        content,
        imageUrl,
        homepageId: id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('response inside postStory thunk: ', response);
      dispatch(postStorySucces(response.data));
    }
    catch (error) {
      console.log('error: ', error)
    }
  }
}