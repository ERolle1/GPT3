import styles from "../header/header.module.css";
import people from "../../assets/Group 81.png";
import illustration from "../../assets/Header Illustration.png";
export const Header = () => {
  return (
    <div className={`${styles.gpt3__header} section__padding`}>
      <div className={styles.gpt3__header_content}>
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles.gpt3__header_content_input}>
          <input type="email" name="" id="" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>

        <div className={styles.gpt3__header_content_people}>
          <img src={people} alt="people" />
          <p>1,600 people requested access in last 24 hours</p>
        </div>
      </div>
      <div className={styles.gpt3__header_image}>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};
