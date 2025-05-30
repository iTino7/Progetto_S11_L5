import { ADD_TO_PLAYER } from "../action";

const initialState = {
  toggle: null,
};

const addPlayerReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER: {
      return {
        ...state,
        toggle: action.payload,
      };
    }
    default:
      return state;
  }
};
export default addPlayerReducers;
