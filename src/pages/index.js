import Link from "next/link";
import * as React from "react";
import ConditionalWrapper from "../components/conditional-wrapper";
import Countdown from "../components/countdown";
import Heading from "../components/heading";
import Jabba from "../components/jabba";
import Paragraph from "../components/paragraph";
import Seo from "../components/seo";
import styles from "../styles/home.module.css";
import { useCountdown } from "../utils/countdownProvider";

export default function Home() {
  const { deadlineReached } = useCountdown();

  return (
    <>
      <Seo />
      <main className={styles.main}>
        <section className={styles.container}>
          <ConditionalWrapper
            condition={deadlineReached}
            wrapper={children => (
              <Link href="/ble-denbu">
                <a>
                  {children}
                  <Paragraph>Trykk for å opna gåva</Paragraph>
                </a>
              </Link>
            )}
          >
            <Heading className={styles.title}>{deadlineReached ? "JA" : "NEI"}</Heading>
            <Countdown hideCountdownOnDeadlineReached />
          </ConditionalWrapper>
        </section>
        <Jabba />
      </main>
    </>
  );
}
