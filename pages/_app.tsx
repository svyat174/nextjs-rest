import { AppProps } from "next/app";
import '../styles/globals.css'
import Head from "next/head";
import React from "react";


export default function Home({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Volosova - обучение, студия наращивания волос</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component { ...pageProps } />
    </>
  )
}