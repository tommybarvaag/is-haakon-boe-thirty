import * as React from "react";
import { getImageUrl } from "../utils/api";
import styles from "./video.module.css";

export default function VideoBase({ webm, mp4, poster }) {
  const videoRef = React.useRef();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const posterSrc = React.useMemo(() => getImageUrl(poster), [poster]);

  const renderOverlay = () => {
    if (isPlaying) {
      return null;
    }

    return (
      <div className={styles.overlay}>
        <svg className={styles.svg} viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <div
      className={styles.container}
      onClick={
        isPlaying
          ? () => {
              if (videoRef.current) {
                videoRef.current.pause();
                setIsPlaying(false);
              }
            }
          : () => {
              if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
              }
            }
      }
    >
      {renderOverlay()}
      <video ref={videoRef} className={styles.video} poster={posterSrc} loop muted>
        {webm && <source src={webm} type="video/webm" />}
        {mp4 && <source src={mp4} type="video/mp4" />}
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}
