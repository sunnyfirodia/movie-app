import React from 'react';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom'

const MoviesList = ({ movies, isLoading }) => {
  if(movies.length < 1 && isLoading == false){
    return(
      <>
      <h2 className="section-title"> 
        No Movies Found ...:(
      </h2>
      </>
    )
  }
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
