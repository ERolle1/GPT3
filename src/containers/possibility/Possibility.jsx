import styles from "../possibility/possibility.module.css";
import possibilityImage from "../../assets/Feature Image.png";
export const Possibility = () => {
  return (
    <div
      className={`${styles.gpt3__possibility} section__padding`}
      id="possibility"
    >
      <div className={styles.gpt3__possibility_image}>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className={styles.gpt3__possibility_content}>
        <h4>Request early access to get started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Our technology is the best</p>
        <h4>reequest for Early Access</h4>
      </div>
    </div>
  );
};
