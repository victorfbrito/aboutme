import "../styles/globals.css";
import "../public/fonts/style.css";
import type { AppProps } from "next/app";
import "../i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
