import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import SimilarMovies from "./similar_movies_g";

const API_URL = "http://www.omdbapi.com?apikey=7ba64470";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetch(`${API_URL}&s=movie&sort=year&y=2023`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search.slice(0, 10)); // Fetch top 10 movies
      }
    };

    fetchTopRatedMovies();
  }, []);

  const nextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const previousMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="home-page">
        <h1 className="title">Top IMDb Rated Movies</h1>
      <div className="carousel">
        <button className="nav-btn left" onClick={previousMovie}>
          &#8592;
        </button>
        <div className="carousel-wrapper">
          {movies.map((movie, index) => {
            const position =
              index === currentIndex
                ? "center"
                : index === (currentIndex - 1 + movies.length) % movies.length
                ? "left"
                : index === (currentIndex + 1) % movies.length
                ? "right"
                : "hidden";

            return (
              <div
                key={movie.imdbID}
                className={`carousel-item ${position}`}
                onClick={() => handleMovieClick(movie.imdbID)}
              >
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
                  alt={movie.Title}
                />
                {position === "center" && <p>{movie.Title}</p>}
              </div>
            );
          })}
        </div>
        <button className="nav-btn right" onClick={nextMovie}>
          &#8594;
        </button>
      </div>
      <div className="section-divider"></div>
      <div className="Genre">
        <h2 className="section_title">Action</h2>
        <SimilarMovies genre="Action" />
        <h2 className="section_title">Comedy</h2>
        <SimilarMovies genre="Comedy" />
        <h2 className="section_title">Horror</h2>
        <SimilarMovies genre="Horror" />
        <h2 className="section_title">Adventure</h2>
        <SimilarMovies genre="Adventure" />
        <h2 className="section_title">Avengers</h2>
        <SimilarMovies genre="Avengers" />
        <h2 className="section_title">Romance</h2>
        <SimilarMovies genre="Romance" />
        <h2 className="section_title">Kids</h2>
        <SimilarMovies genre="Cartoon" />
        <h2 className="section_title">Sports</h2>
        <SimilarMovies genre="Sports" />
      </div>
    </div>
  );
};

export default HomePage;