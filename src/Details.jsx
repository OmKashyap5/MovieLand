// import React from 'react';


// const Details = ({details}) => {
  
//   return (
//     <div className="movie-details-container">
//       <div className="a">
//         <h1>{details.Year}</h1>
//         <h1>{details.Actors}</h1>
//         <h1>{details.Plot}</h1>
//       </div>
//     </div>
//   );
// };

// export default Details;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const API_URL = 'http://www.omdbapi.com?apikey=7ba64470';

// const MovieDetails = () => {
//   const { id } = useParams(); // Get the imdbID from the URL
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const response = await fetch(`${API_URL}&i=${id}`);
//       const data = await response.json();
//       setDetails(data);
//     };

//     fetchDetails();
//   }, [id]);

//   if (!details) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-details">
//       <h1>{details.Title}</h1>
//       <img
//         src={details.Poster !== "N/A" ? details.Poster : "https://via.placeholder.com/400"}
//         alt={details.Title}
//       />
//       <p><strong>IMDb Rating:</strong> {details.imdbRating}</p>
//       <p><strong>Released:</strong> {details.Released}</p>
//       <p><strong>Rated:</strong> {details.Rated}</p>
//       <p><strong>Duration:</strong> {details.Runtime}</p>
//       <p><strong>Genre:</strong> {details.Genre}</p>
//       <p><strong>Director:</strong> {details.Director}</p>
//       <p><strong>Actors:</strong> {details.Actors}</p>
//       <p><strong>Plot:</strong> {details.Plot}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default MovieDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./details.css"; // Import the CSS file

// const API_URL = "http://www.omdbapi.com?apikey=7ba64470";

// const MovieDetails = () => {
//   const { id } = useParams(); // Get movie ID from URL
//   const [movie, setMovie] = useState(null);

//   // Fetch movie details when component loads
//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const response = await fetch(`${API_URL}&i=${id}`);
//       const data = await response.json();
//       setMovie(data);
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (!movie) {
//     return <div>Loading...</div>; // Show a loading state
//   }

//   return (
//     <div className="movie-details">
//       {/* Movie poster */}
//       <div>
//         <img
//           src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
//           alt={movie.Title}
//         />
//       </div>

//       {/* Movie details */}
//       <div>
//         <h1>{movie.Title}</h1>
//         <p>{movie.Plot}</p>
//         <p><strong>Genre:</strong> {movie.Genre}</p>
//         <p><strong>Director:</strong> {movie.Director}</p>
//         <p><strong>Actors:</strong> {movie.Actors}</p>
//         <p><strong>Released:</strong> {movie.Released}</p>
//         <p><strong>Rating:</strong> {movie.imdbRating}/10</p>

//         {/* Buttons */}
//         <div>
//           <button>Watch Now</button>
//           <button>Watch Trailer</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import SimilarMovies from "./similar_movies_g";
import SimilarMovies1 from "./similar_movies_ac";

const API_URL = "http://www.omdbapi.com?apikey=7ba64470";

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
        <SimilarMovies genre={movie.Genre} />
        <SimilarMovies1 actor={movie.Actors} />
      </div>
    </div>
    
  );
};

export default MovieDetails;
