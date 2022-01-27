import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Tmdb from "../../Tmdb";
import MovieCard from "../MovieCard/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadAllMovie = async () => {
      let listMovie = await Tmdb.getMovie();
      setMovies(listMovie);
    };

    loadAllMovie();
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.movie}>
        {movies.length > 0 &&
          movies.map((item, key) => <MovieCard key={key} items={item.items} />)}
      </section>
    </div>
  );
}

export default Home;
