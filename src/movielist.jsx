import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = 'http://www.omdbapi.com?apikey=7ba64470';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };


  return (
    <div className="movie-list">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
        {/* <button onClick={() => searchMovies(searchTerm)}>Search</button> */}
      </div>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
};

export default MovieList;
