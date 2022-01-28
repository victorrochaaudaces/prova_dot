import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Tmdb from "../../Tmdb";
import MovieCard from "../MovieCard/MovieCard";
import { useParams } from "react-router-dom";

function Search() {
const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `${Tmdb.API_BASE}/search/movie?with_title=%${id}%&language=pt-BR&api_key=${Tmdb.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-type": "applicatio/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={styles.home}>
      <div className={styles.list}>
        {movies.length > 0 &&
          movies.map((item, key) => (
            <MovieCard
              key={key}
              images={item.poster_path}
              title={item.title}
              point={item.vote_average}
              generos={item.genres}
              id={item.id}
            />
          ))}
      </div>
    </section>
  );
}

export default Search;