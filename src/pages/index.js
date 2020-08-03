import Head from "next/head";
import * as React from "react";
import Countdown from "../components/countdown";
import styles from "../styles/home.module.css";

export default function Home() {
  const [isHaakonBoeThirty, setIsHaakonBoeThirty] = React.useState(false);

  return (
    <>
      <Head>
        <title>Er Håkon Bøe tretti?</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000" />
        <meta name="msapplication-TileColor" content="#000" />
        <meta name="theme-color" content="#000" />
      </Head>
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.title}>{isHaakonBoeThirty ? "JA" : "NEI"}</h1>
          <Countdown
            deadlineDate={new Date(2020, 7, 26, 0, 0, 0)}
            onDeadlineReached={() => setIsHaakonBoeThirty(true)}
            hideCountdownOnDeadlineReached
          />
        </section>
      </main>
    </>
  );
}
