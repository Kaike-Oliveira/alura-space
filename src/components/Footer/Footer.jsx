// STYLE
import styles from "./Footer.module.scss";

// ICONS
import github from "../../resources/github.svg";
import instagram from "../../resources/instagram.svg";
import linkedin from "../../resources/linkedin.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          href="https://github.com/Kaike-Oliveira"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/kaikeoliveira/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://www.instagram.com/kaikeol_kb/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </div>
      <p>Developed by Kaike</p>
    </footer>
  );
}