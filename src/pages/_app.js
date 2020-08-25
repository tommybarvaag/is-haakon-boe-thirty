import * as React from "react";
import "../styles/globals.css";
import CountdownProvider from "../utils/countdownProvider";

export default function MyApp({ Component, pageProps }) {
  const cssScrollSnapPolyfillAdded = React.createRef(false);

  React.useEffect(() => {
    if (!cssScrollSnapPolyfillAdded.current) {
      console.log("Add poly");
      import("css-scroll-snap-polyfill").then(mod => {
        mod.default();
        cssScrollSnapPolyfillAdded.current = true;
      });
    }

    return () => {
      cssScrollSnapPolyfillAdded.current = false;
    };
  }, [cssScrollSnapPolyfillAdded.current]);

  return (
    <CountdownProvider deadlineDate={new Date(2020, 7, 26, 0, 0, 0)}>
      <Component {...pageProps} />
    </CountdownProvider>
  );
}
