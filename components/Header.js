import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({ name }) {
    return (
        <div className="headerdiv bg-stone-800">
            <ul className="w-full flex h-10">
                <li className="text-white">
                    <Link href="/">
                        <a className="" layout="responsive">
                            Accueil
                        </a>
                    </Link>
                </li>
                <li className="text-white">
                    <Link href="/projects">
                        <a className="" layout="responsive">
                            Mes projects
                        </a>
                    </Link>
                </li>
                <li className="text-white">
                    <Link href="/contact">
                        <a className="" layout="responsive">
                            Contact
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}