import styles from "./Hamburguer.module.css";
type Props = {
  active: boolean;
};
export const Hamburguer = ({ active }: Props) => {
  return (
    <div className={styles.hamburguer}>
      {!active && (
        <>
          <img src="./icon-menu.svg" alt="" />
        </>
      )}
      {active && (
        <>
          <div className={styles.menu}>
            <div className={styles.menuOp}>
              <img src="./icon-menu-close.svg" alt="" />
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
          </div>
        </>
      )}
    </div>
  );
};
