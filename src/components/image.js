import * as React from "react";
import { getImageUrl } from "../utils/api";
import styles from "./image.module.css";

export default function Image({ asset, src, alt }) {
  const imageSrc = React.useMemo(() => getImageUrl(asset) ?? src, [asset, src]);

  return (
    <picture className={styles.picture}>
      <source srcSet={imageSrc} />
      <img className={styles.image} src={imageSrc} alt={alt ?? "Missing alt"} loading="lazy" />
    </picture>
  );
}
