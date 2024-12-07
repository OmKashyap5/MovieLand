import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Similar_movies_g.css";

const API_URL = "http://www.omdbapi.com?apikey=<enter _your_api_key>";

const SimilarMovies = ({ genre }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const fetchSimilarMovies = async () => {
    try {
      const genres = genre.split(","); // Split genres into an array
      const uniqueMovies = []; // To store unique movies
      const promises = genres.map(async (g) => {
        let page = 1; // Start from page 1
        let morePages = true; // Flag for pagination

        while (page < 3 && morePages) {
          const response = await fetch(`${API_URL}&s=${g.trim()}&type=movie&page=${page}`);
          const result = await response.json();

          if (result.Search) {
            result.Search.forEach((movie) => {
              // Add only unique movies
              if (!uniqueMovies.find((m) => m.imdbID === movie.imdbID)) {
                uniqueMovies.push(movie);
              }
            });
            page++;
          } else {
            morePages = false; // Stop if no results
          }
        }
      });

      await Promise.all(promises);
  
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
