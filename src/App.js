// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// import React from 'react';
// import {useState} from 'react';
// import MovieCard from "./MovieCard.jsx";
// import SearchIcon from "./search.svg";
// import "./App.css";

// const API_URL= 'http://www.omdbapi.com?apikey=7ba64470';
// const App=() => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);

//   const search_movies=async(title) => {
//     const response=await fetch(`${API_URL}&s=${title}`);
//     const data=await response.json();
//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>MovieLand</h1>

//       <div className="search">
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search for movies"
//         />
        // <img
        //   src={SearchIcon}
        //   alt="search"
        //   onClick={() => search_movies(searchTerm)}
        // />
//       </div>

//       {movies?.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./movielist"
import MovieDetails from "./Details"; // Component to display movie details
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} /> {/* Your movie list component */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
