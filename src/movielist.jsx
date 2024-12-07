
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./Movielist.css";

const API_URL = "http://www.omdbapi.com?apikey=<enter _your_api_key>";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Load previous search results if available
  useEffect(() => {
    const savedSearchTerm = localStorage.getItem("searchTerm");
    const savedMovies = localStorage.getItem("movies");
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  const searchMovies = async (title) => {
    if (!title) return;
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const movieResults = data.Search || [];
    setMovies(movieResults);
    localStorage.setItem("searchTerm", title);
    localStorage.setItem("movies", JSON.stringify(movieResults));
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
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
          onKeyDown={handleSearch}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} onClick={() => navigate(`/movie/${movie.imdbID}`)}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
};

export default MovieList;
