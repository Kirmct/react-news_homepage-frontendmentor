import styles from "./News.module.css";
export const News = () => {
  return (
    <aside className={styles.card}>
      <h2 className={styles.title}>New</h2>

      <div className={styles.notices}>
        <div className={styles.notice}>
          <h4>Hydrogen VS Eletric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr />
        </div>
        <div className={styles.notice}>
          <h4>The Downsides of Al Artistry</h4>
          <p>
            What are the possivle adverse effects of on-demand AI image
            generation
          </p>
          <hr />
        </div>

        <div className={styles.notice}>
          <h4>Is VC Funding Drying Up</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            means.
          </p>
        </div>
      </div>
    </aside>
  );
};
