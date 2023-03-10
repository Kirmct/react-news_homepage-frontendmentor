import { Button } from "../Button";
import styles from "./Main.module.css";
export const Main = () => {
  return (
    <main className={styles.teste}>
      <div className={styles.img}>
        <picture>
          <source media="(max-width:770px)" srcSet="./image-web-3-mobile.jpg" />
          <img src="./image-web-3-desktop.jpg" alt="imagem01" />
        </picture>
      </div>
      <div className={styles.grid}>
        <div className={styles.title}>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className={styles.mainInfo}>
          <p>
            We dive into the next evolution of web that claims to put the power
            of the platforms back into the hans of the people. But is it really
            fulfiling its promis?
          </p>
          <Button />
        </div>
      </div>
    </main>
  );
};
