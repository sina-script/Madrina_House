import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <div className={styles.badge}>Exclusive</div>
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderText}>
            <img src={props.image} alt="" className={styles.cardImage} />
          </span>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.metaInfo}>
          <span className={styles.category}>Master Edition</span>
          <span className={styles.rating}>★ 4.9</span>
        </div>

        <h3 className={styles.cardTitle}>Titanium Smart Chrono</h3>

        <p className={styles.cardDescription}>
          Engineered with aerospace-grade materials, sapphire crystal display,
          and unmatched precision timing.
        </p>

        <div className={styles.cardFooter}>
          <div className={styles.priceSection}>
            <span className={styles.currency}>$</span>
            <span className={styles.price}>1,290</span>
          </div>

          <button className={styles.buyBtn}>
            <span>Acquire</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
