import axios from 'axios';

export const loadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await axios.get('./sample.json');
      return dispatch(setMovies(movies.data.entries));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
});
