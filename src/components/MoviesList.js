import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ movies, isLoading }) => {
  return (
    <div className="movies-list">
      {isLoading ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          {movies.map((movie, index) => (
            <MovieItem key={index} {...movie} />
          ))}
        </>
      )}
    </div>
  );
};

export default MoviesList;
