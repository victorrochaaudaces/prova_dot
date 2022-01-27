import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieCard from "./components/MovieCard/MovieCard";
import Navbar from "./components/navbar/Index";
// import Home from "./components/pages/Home";
import Tmdb from "./Tmdb";

function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadAllMovie = async () => {
      let listMovie = await Tmdb.getMovie();
      setMovies(listMovie);
    };

    loadAllMovie();
  }, []);

  return (
    <div>
      <Navbar />
     <section>
        {movies.length > 0 &&
          movies.map((item, key) => <MovieCard key={key} items={item.items} />)}
      </section>
    </div>
  );
}

export default App;
