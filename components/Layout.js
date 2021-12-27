import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
