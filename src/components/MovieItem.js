import React from 'react';
import { Card } from 'react-bootstrap';

const MovieItem = ({ title, description, programType, images, releaseYear}) => {
  return (
    <Card className="movie">
      <Card.Img variant="top"  src={images['Poster Art'].url} className="movie__image" alt={title} />
      <Card.Body>
        <Card.Title className="movie__name">{title}</Card.Title>
        <Card.Text className="movie__details">
          <span className="movie__name">
           {releaseYear}
          </span>
          <span className="movie__name">
             {programType}
          </span>
          <span>
             {description}
          </span>
     
   
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
