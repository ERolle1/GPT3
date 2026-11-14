import styles from "../navbar/navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
import { useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles.gpt3__navbar_links}>
        <div className={styles.gpt3__navbar_links_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.gpt3__navbar_links_container}>
          <p>
            <a href="#home">Home </a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT-3 </a>
          </p>
          <p>
            <a href="#possibility">Open Ai </a>
          </p>
          <p>
            <a href="#features">Case Studies </a>
          </p>
          <p>
            <a href="#blog">Library </a>
          </p>
        </div>
      </div>
      <div className={styles.gpt3__navbar_sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.gpt3__navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={styles.gpt3__navbar_menu_container}>
            <div className={styles.gpt3__navbar_menu_container_links}>
              <p>
                <a href="#home">Home </a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT-3 </a>
              </p>
              <p>
                <a href="#possibility">Open Ai </a>
              </p>
              <p>
                <a href="#features">Case Studies </a>
              </p>
              <p>
                <a href="#blog">Library </a>
              </p>
              <div className={styles.gpt3__navbar_menu_container_links_sign}>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
