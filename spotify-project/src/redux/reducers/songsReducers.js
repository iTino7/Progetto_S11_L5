import { SET_HIPHOP_SONGS, SET_POP_SONGS, SET_SONGS } from "../action";

const initialState = {
  song: [],
  pop: [],
  hiphop: [],
};

const songsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS: {
      return {
        ...state,
        song: action.payload,
      };
    }
    case SET_POP_SONGS: {
      return {
        ...state,
        pop: action.payload,
      };
    }
    case SET_HIPHOP_SONGS: {
      return {
        ...state,
        hiphop: action.payload,
      };
    }
    default:
      return state;
  }
};

export default songsReducers;
