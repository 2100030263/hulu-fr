import React, { useState } from "react";
import "./App.css";
import Headers from "./components/Headers";
import Nav from "./components/Nav";
import Results from "./components/Results";

const API_URL = "http://www.omdbapi.com/?apikey=963ed5a5";

function App() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch movies based on category or search term
  const fetchMovies = async (query) => {
    try {
      const response = await fetch(`${API_URL}&s=${query}`);
      const data = await response.json();
      if (data.Search) {
        setSelectedMovies(data.Search);
      } else {
        setSelectedMovies([]); // Clear movies if no results are found
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  // Search movies by title
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      fetchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <Headers
        onCategoryClick={fetchMovies}
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <Nav fetchMovies={fetchMovies} />
      <Results movies={selectedMovies} />
    </div>
  );
}

export default App;
