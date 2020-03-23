import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import home from './home/reducer';
import stories from './stories/reducer';

export default combineReducers({
  appState,
  user,
  home,
  stories
});
