import "@/styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sol Casino</title>
        <meta
          name="description"
          content="personal blog website for sunil reddy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
