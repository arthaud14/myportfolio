import next from "next";
import styles from "../styles/Home.module.css";
import Link from "next/Link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100">
       <div className="max-w-screen-xl mx-auto px-4 h-10">

       
      <ul className="">
        <li>
          <a href="https://www.linkedin.com/in/arthaud-primevert-56b225108/">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.https://github.com/arthaud14/">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.flickr.com/photos/arthaudprimevert/">
            <i className="fab fa-flickr" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
}
