import "../styles/globals.css";
import Layout from "../components/layout/layout.component";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Programming Logbook</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
