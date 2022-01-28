import styles from "./Navbar.module.css";
import { GoSearch } from "react-icons/go";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  function handleChange(e) {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  }

  function search(e) {
    e.preventDefault();
    let id = searchValue.search_input
    navigate(`/search/${id}`);
  }
  return (
    <header>
      <div className={styles.logo}>
        <a href="/">LOGO</a>
      </div>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          name="search_input"
          placeholder="Pesquisar"
          onChange={handleChange}
          value={searchValue.search_input ? searchValue.search_input : ''}
        />
        <button onClick={search} className={styles.btn}>
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
