import styles from "../cta/cta.module.css";

export const Cta = () => {
  return (
    <div className={styles.gpt3__cta}>
      <div className={styles.gpt3__cta_content}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possibilities.</h3>
      </div>
      <div className={styles.gpt3__cta_button}>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};
