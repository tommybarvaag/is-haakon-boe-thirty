import * as React from "react";
import Image from "./image";
import styles from "./scroll-snap.module.css";
import Video from "./video";

export default function ScrollSnap({ assets = [] }) {
  return (
    <div className={styles.container}>
      {assets.map(asset => (
        <section className={styles.section}>
          {asset.type === "movie" ? (
            <Video mp4={asset.url} alt={asset.alt} caption={asset.caption} />
          ) : (
            <Image asset={asset} src={asset.url} alt={asset.alt} caption={asset.caption} />
          )}
        </section>
      ))}
    </div>
  );
}
