import next from "next";
import styles from "../styles/Home.module.css";
import Link from "next/Link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul className="socialFooter">
        <li>
          <a href="https://www.linkedin.com/in/arthaud-primevert-56b225108/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.https://github.com/arthaud14/">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.flickr.com/photos/arthaudprimevert/">
            <i className="fa fa-flickr" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
