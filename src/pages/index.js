import * as React from "react";
import Countdown from "../components/countdown";
import Jabba from "../components/jabba";
import Seo from "../components/seo";
import styles from "../styles/home.module.css";

export default function Home() {
  const [isHaakonBoeThirty, setIsHaakonBoeThirty] = React.useState(false);

  return (
    <>
      <Seo />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.title}>{isHaakonBoeThirty ? "JA" : "NEI"}</h1>
          <Countdown
            deadlineDate={new Date(2020, 7, 26, 0, 0, 0)}
            onDeadlineReached={() => setIsHaakonBoeThirty(true)}
            hideCountdownOnDeadlineReached
          />
        </section>
        <Jabba />
      </main>
    </>
  );
}
