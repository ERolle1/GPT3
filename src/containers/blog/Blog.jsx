import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import styles from "../blog/blog.module.css";

export const Blog = () => {
  return (
    <div className={`${styles.gpt3__blog} section__padding`} id="blog">
      <div className={styles.gpt3__blog_heading}>
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className={styles.gpt3__blog_container}>
        <div className={styles.gpt3__blog_container_groupA}>
          <Article
            imageurl={blog01}
            date="Sep 26, 2021"
            title="Open AI is the future. Let us explore it now."
          />
        </div>
        <div className={styles.gpt3__blog_container_groupB}>
          <Article
            imageurl={blog02}
            date="Sep 26, 2021"
            title="Open AI is the future. Let us explore it now."
          />
          <Article
            imageurl={blog03}
            date="Sep 26, 2021"
            title="Open AI is the future. Let us explore it now."
          />
          <Article
            imageurl={blog04}
            date="Sep 26, 2021"
            title="Open AI is the future. Let us explore it now."
          />
          <Article
            imageurl={blog05}
            date="Sep 26, 2021"
            title="Open AI is the future. Let us explore it now."
          />
        </div>
      </div>
    </div>
  );
};
