import "../styles/globals.css";
import CountdownProvider from "../utils/countdownProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CountdownProvider deadlineDate={new Date(2020, 7, 26, 0, 0, 0)}>
      <Component {...pageProps} />
    </CountdownProvider>
  );
}

export default MyApp;
