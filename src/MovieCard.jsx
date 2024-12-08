import React from 'react';
import Details from "./Details"
import {useState} from 'react';

import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const navigate = useNavigate();

  return (
    <div className="movie" key={imdbID}>
      <div>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
          onClick={() => navigate(`/movie/${imdbID}`)} // Navigate to the details page
        />
      </div>
    </div>
  );
};

export default MovieCard;
