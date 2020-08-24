import * as React from "react";

export default function Video({ webm, mp4 }) {
  return (
    <video controls>
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
