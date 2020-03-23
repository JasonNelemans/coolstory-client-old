import axios from 'axios';
import { apiUrl } from "../../config/constants";

export function fetchHomepagesSucces(data) {
  return {
    type: 'FETCH_HOMEPAGES_SUCCES',
    payload: data
  }
} 

export function fetchHomepages() {
  return async (dispatch, getState) => {
    const state = getState();
    const response = await axios.get(`${apiUrl}/homepage`);

    if(state.home.length != 0) return;

    const data = response.data
    dispatch(fetchHomepagesSucces(data));
  }
}

