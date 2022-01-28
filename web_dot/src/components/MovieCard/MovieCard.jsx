import styles from "./MovieCard.module.css";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Tmdb from "../../Tmdb";
import { useEffect, useState } from "react";

function MovieCard({ images, title, point, id }) {
  const [geners, setGeners] = useState([])
  let valor = 79.9;
  let date = "27 de Janeiro de 2021";

  useEffect(() => {
    fetch(
      `${Tmdb.API_BASE}/movie/${id}?language=pt-BR&api_key=${Tmdb.API_KEY}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setGeners(data.genres)
      })
      .catch((err) => console.log(err));
  }, []);

  let generos = []
  // //   for e para pegar os generos
    for(let i in geners) {
  //     //   adicionar os itens ao array no loop
        generos.push(geners[i].name)
    }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.art_card}>
          <button className={styles.icon}>
            <AiFillHeart style={{ fontSize: 35 }} />
          </button>
          <img src={`https://image.tmdb.org/t/p/w300${images}`} alt="olá" />
          <div>
            <p></p>
          </div>
          <div className={styles.word}>
            <p>
              <strong>{title}</strong>
            </p>
            <p>
              <AiFillStar /> {point} - {generos.join(", ")}
            </p>
            <p>Valor: R${valor.toFixed(2)}</p>
          </div>
          
          <button className={styles.btn}>Adicionar</button>
          
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
