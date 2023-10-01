import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "@next/font/google";

const font = Ubuntu({ weight: ["400"], display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}
