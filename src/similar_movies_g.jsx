import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Similar_movies_g.css";

const API_URL = "http://www.omdbapi.com?apikey=7ba64470";

const SimilarMovies = ({ genre }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const fetchSimilarMovies = async () => {
    try {
      const genres = genre.split(","); // Split genres into an array
      const promises = genres.map(async (g) => {
        const response = await fetch(`${API_URL}&s=${g.trim()}&type=movie`);
        return response.json();
      });
      const results = await Promise.all(promises);
  
      const uniqueMovies = [];
      results.forEach((result) => {
        if (result.Search) {
          result.Search.forEach((movie) => {
            if (!uniqueMovies.find((m) => m.imdbID === movie.imdbID)) {
              uniqueMovies.push(movie); // Add only unique movies
            }
          });
        }
      });
  
      setSimilarMovies(uniqueMovies);
    } catch (error) {
      console.error("Error fetching similar movies:", error);
    }
  };

  useEffect(() => {
    if (genre) fetchSimilarMovies();
  }, [genre]);

  return (
    <div className="similar-movies">
      <h2>Similar Movies based on Genre</h2>
      <div className="movies-scroll">
        {similarMovies.map((movie) => (
          <div className="movie-card" key={movie.imdbID}>
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
                alt={movie.Title}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
