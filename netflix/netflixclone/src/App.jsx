import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";

function APP() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    // colocamos função asyn para esperar o resultado e evitar erros noi console
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default APP;
