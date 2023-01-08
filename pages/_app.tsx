import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Overpass } from "@next/font/google";

const font = Overpass({ weight: ["200"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
