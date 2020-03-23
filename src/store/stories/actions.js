import axios from 'axios';
import { apiUrl } from "../../config/constants";

export function fetchStoriesSucces(data) {
  return {
    type: 'FETCH_STORIES_SUCCES',
    payload: data
  }
}

export function fetchStories(id) {
  return async (dispatch, getState) => {
    const state = getState();

    const response = await axios.get(`${apiUrl}/homepage/stories/${id}`);

    dispatch(fetchStoriesSucces(response.data))

  }
}