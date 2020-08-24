import * as React from "react";
import ScrollSnap from "../components/scroll-snap";
import Seo from "../components/seo";
import styles from "../styles/home.module.css";
import { getCollagePage } from "../utils/api";

export default function BleDenbu({ title, assets }) {
  return (
    <>
      <Seo />
      <main className={styles.main}>
        <ScrollSnap assets={assets} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const page = await getCollagePage();

  return {
    revalidate: 3600,
    props: {
      ...page
    }
  };
}
