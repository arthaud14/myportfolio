import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header({ name }) {
    return (
        <div className="headerdiv bg-gray-200">
            <ul className="w-full flex h-10">
                <li className="text-black">
                    <Link href="/">
                        <a className="" layout="responsive">
                            Accueil
                        </a>
                    </Link>
                </li>
                <li className="text-black">
                    <Link href="/projects">
                        <a className="" layout="responsive">
                            Mes projects
                        </a>
                    </Link>
                </li>
                <li className="text-black">
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