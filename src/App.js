import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import About from './comp/About';
import Search from './comp/Search';
import MovieDetails from './comp/MovieDetails';
import PageNotFound from './comp/PageNotFound';
import { Routes, Route } from "react-router-dom";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=4385874cb88ca729fd9807e46ee98179&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
    }
}, [searchText])

return (
  <div>
    <Navbar searchText={searchText} setSearchText={setSearchText} />
    <Routes>
      <Route 
        path="/*" 
        element={<PageNotFound />}
      />
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/search"
        element={<Search keyword={searchText} searchResults={searchResults} />}
      />
      <Route
        path="/movies/:id"
        element={<MovieDetails />}
      />
    </Routes>
  </div>
);
}

export default App;
