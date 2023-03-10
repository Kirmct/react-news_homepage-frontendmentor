import styles from "./List.module.css";
import { lista } from "../../helpers/List/List";
export const List = () => {
  return (
    <article>
      <div className={styles.listCardAll}>
        {lista.map((item, index) => (
          <div key={index} className={styles.listCard}>
            <div className={styles.listImg}>
              <img src={item.img} alt="" />
            </div>
            <div className={styles.info}>
              <h4>{item.position}</h4>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
