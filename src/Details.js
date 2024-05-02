import React from 'react';


const Details = ({details}) => {
  
  return (
    <div className="movie-details-container">
      <div className="a">
        <h1>{details.Year}</h1>
        <h1>{details.Actors}</h1>
        <h1>{details.Plot}</h1>
      </div>
    </div>
  );
};

export default Details;