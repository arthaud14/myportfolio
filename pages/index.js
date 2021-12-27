import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import myImage from "../public/img/myImage.jpg";

export default function Home() {
  return (
    <div className="">
      <Layout className="Accueil">
        <div className="container w-full m-0">
          <h1 className="text-black z-10 absolute w-full text-center mt-10 text-xl">Arthaud PRIMEVERT</h1>
          <h3 className="text-black z-10 absolute mt-20 text-center w-full">Développeur Web Junior Full Stack</h3>
          <Image
            className="object-cover w-full h-full relative z-0"
            src={myImage}
            layout="responsive"
            alt="image lac"
          />
        </div>
      </Layout>
    </div>
  );
}
