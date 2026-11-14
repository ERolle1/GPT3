import styles from "../feature/feature.module.css";

export const Feature = ({ title, text }) => {
  return (
    <div className={styles.gpt3__features_container_feature}>
      <div className={styles.gpt3__features_container_feature_title}>
        <div> </div>
        <h1>{title}</h1>
      </div>

      <div className={styles.gpt3__features_container_feature_text}>
        <p>{text}</p>
      </div>
    </div>
  );
};
