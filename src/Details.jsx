
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import SimilarMovies from "./similar_movies_g";
import SimilarMovies1 from "./similar_movies_ac";

const API_URL = "http://www.omdbapi.com?apikey=<enter _your_api_key>";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchMovieDetails = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="parent">
      <div
        className="movie-details"
        style={{
          backgroundImage: `url(${movie.Poster !== "N/A" ? movie.Poster : ""})`,
        }}
      >
        {/* Movie poster */}
        <div className="poster-container">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
            alt={movie.Title}
          />
        </div>

        {/* Movie details */}
        <div className="details-container">
          <h1>{movie.Title}</h1>
          <p>{movie.Plot}</p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Rating:</strong> {movie.imdbRating}/10
          </p>

          {/* Buttons */}
          <div className="action-buttons">
            <button>Watch Now</button>
            <button>Watch Trailer</button>
          </div>
        </div>
      </div>
      <div className="similar">
      <h2>Similar Movies based on Genre</h2>
        <SimilarMovies genre={movie.Genre} />
        <h2>Similar Movies based on Actors</h2>
        <SimilarMovies1 actor={movie.Actors} />
      </div>
    </div>
    
  );
};

export default MovieDetails;
