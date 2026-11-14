import styles from "../article/article.module.css";

export const Article = ({ imageurl, date, title }) => {
  return (
    <div className={styles.gpt3__blog_container_article}>
      <div className={styles.gpt3__blog_container_article_image}>
        <img src={imageurl} alt="blog" />
      </div>
      <div className={styles.gpt3__blog_container_article_content}>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};
