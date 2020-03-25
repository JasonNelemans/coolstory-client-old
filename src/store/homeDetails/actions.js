import axios from 'axios';
import { apiUrl } from "../../config/constants";
import { selectToken } from '../user/selectors';

export function homepageIdSucces(data) {
  return {
    type: 'HOMEPAGE_BY_ID',
    payload: data
  }
}

export function fetchHomepagesById(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/homepage/${id}`);
    dispatch(homepageIdSucces(response.data))
  }
}

export function updateHomepageSucces(data) {
  return {
    type: 'UPDATE_SUCCES',
    payload: data
  }
}

export function updateHomepage(title, description, color, backgroundColor, id) {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    
    const response = await axios.patch(`${apiUrl}/homepage/${id}`, {
        title,
        description,
        color, 
        backgroundColor, 
        id
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    dispatch(updateHomepageSucces(...response.data))
  }
}