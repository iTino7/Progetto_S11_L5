export const SET_SONGS = "SET_SONGS";
export const SET_POP_SONGS = "SET_POP_SONGS";
export const SET_HIPHOP_SONGS = "SET_HIPHOP_SONGS";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const addToPlayer = (add) => ({
  type: ADD_TO_PLAYER,
  payload: add,
});

export const fillSongsAction = (artist, genre) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({ type: genre, payload: data.data.slice(4, 8) });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (error) {
      console.log(error);
    }
  };
};


