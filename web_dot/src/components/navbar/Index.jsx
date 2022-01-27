import styles from "./Navbar.module.css";
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";

function Navbar() {
  return (
    <header>
      <div className={styles.logo}>
        <a href='/'>LOGO</a>
      </div>
      <div className={styles.search}>
        <input className={styles.input} type="text" placeholder="Pesquisar" />
        <button className={styles.btn}>
          <GoSearch
            style={{
              fontSize: 20,
            }}
          />
        </button>
      </div>
      <div className={styles.icons}>
        <button className={styles.favorite}>
          <AiFillHeart
            style={{
              fontSize: 25,
            }}
          />
        </button>
        <button className={styles.buy}>
          <RiShoppingCart2Fill
            style={{
              fontSize: 25,
            }}
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
