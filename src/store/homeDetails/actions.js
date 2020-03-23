import axios from 'axios';
import { apiUrl } from "../../config/constants";

export function homepageIdSucces(data) {
  return {
    type: 'HOMEPAGE_BY_ID',
    payload: data
  }
}

export function fetchHomepagesById(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepage/${id}`);
    console.log('resonse.data: ', ...response.data)
    dispatch(homepageIdSucces(response.data))
  }
}
