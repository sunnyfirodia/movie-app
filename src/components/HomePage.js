
import React, { useState, useEffect, useRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loadMovies} from '../actions/movies';
import MoviesList from './MoviesList';
import Header from './Header';
import Filters from './Filters';

const HomePage = (props) => {
  const [movies, setMovies] = useState(props.movies);
  const [sortOrder, setSortOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();


  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadMovies());

    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.movies.length > 0) {
      setMovies(props.movies);
      setIsLoading(false);
    }
  }, [props.movies]);

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.movies.filter((movie) =>
        movie.title.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      filtered = props.movies;
    }
    setMovies(filtered);
    setSortOrder('');
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value == 'name') {
      setMovies(_.orderBy(movies, ['title'], [sortOrder.value]));
    }else if(sortOrder.value == 'year'){
      setMovies(_.orderBy(movies, ['releaseYear'], [sortOrder.value]));
    }
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Filters handleSort={handleSort} sortOrder={sortOrder} />
      <MoviesList movies={movies} isLoading={isLoading} />
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies
});

export default connect(mapStateToProps)(HomePage);
