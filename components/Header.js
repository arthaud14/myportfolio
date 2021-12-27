import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({ name }) {
    return (
        <div className={styles.headerDiv}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/">
                        <a className={styles.buttons} layout="responsive">
                            Accueil
                        </a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/projects">
                        <a className={styles.buttons} layout="responsive">
                            Mes projects
                        </a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/contact">
                        <a className={styles.buttons} layout="responsive">
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}