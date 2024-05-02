import React from 'react';
import Details from "./Details.js"
import {useState} from 'react';

const API_URL= 'http://www.omdbapi.com?apikey=7ba64470';
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [details, setDetails] = useState([]);
  const detail_movies=async() => {
    const response=await fetch(`${API_URL}&t=${Title}`);
    const data=await response.json();
    setDetails(data);
    <Details details={details} />
  };
  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
      <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
          onClick={() => detail_movies()}
      />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;