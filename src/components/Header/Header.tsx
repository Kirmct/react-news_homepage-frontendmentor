import { useState } from "react";
import { Hamburguer } from "../MenuHamburguer";
import styles from "./Header.module.css";
export const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleHamburguerClick = () => {
    setActive(!active);
  };

  return (
    <header className={`${styles.header} ${styles.container}`}>
      <div>
        <img src="./logo.svg" alt="logo" />
      </div>
      <div onClick={handleHamburguerClick} className={styles.headerHamburguer}>
        <Hamburguer active={active ? true : false} />
      </div>

      <ul className={styles.headerMenu}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">New</a>
        </li>
        <li>
          <a href="/">Popular</a>
        </li>
        <li>
          <a href="/">Trending</a>
        </li>
        <li>
          <a href="/">Categories</a>
        </li>
      </ul>
    </header>
  );
};
