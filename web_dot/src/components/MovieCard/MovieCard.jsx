import styles from "./MovieCard.module.css";

function MovieCard({ items }) {
  return (
    <div>
      <div /*className="movieRow--listarea"*/ >
        <div
        //   className="movieRow--list"
        //   style={{
        //     marginLeft: scrollX,
        //     // 150 é a largura de cada item
        //     width: items.results.length * 150,
        //   }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
