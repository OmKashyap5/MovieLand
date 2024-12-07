
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./movielist"
import MovieDetails from "./Details"; // Component to display movie details
import "./App.css";
import Header from "./Header"
import HomePage from "./Home";
import Login from "./login";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Your movie list component */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<MovieList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
