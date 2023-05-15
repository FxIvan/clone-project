import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Layout({ children , page }) {
  return (
    <>
        <Head>
            <title>{page}</title>
        </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
