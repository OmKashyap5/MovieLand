import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Similar_movies_ac.css";

const API_URL = "http://www.omdbapi.com?apikey=7ba64470";

const SimilarMovies1 = ({ actor }) => {
  const [similarMovies, setSimilarMovies1] = useState([]);

  const fetchSimilarMovies1 = async () => {
    try {
      const genres = actor.split(","); // Split genres into an array
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
  
      setSimilarMovies1(uniqueMovies);
    } catch (error) {
      console.error("Error fetching similar movies:", error);
    }
  };

  useEffect(() => {
    if (actor) fetchSimilarMovies1();
  }, [actor]);

  return (
    <div className="similar-movies">
      <h2>Similar Movies based on Actors</h2>
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

export default SimilarMovies1;
