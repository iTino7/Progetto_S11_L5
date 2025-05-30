import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducers from "../reducers/songsReducers";
import addPlayerReducers from "../reducers/addPlayer";

const rootReducers = combineReducers({
  songs: songsReducers,
  player: addPlayerReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
