import Head from "next/head";
import Title from "../sections/Title";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Angela Wang</title>
        <meta name="description" content="Angela Wang's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fox.svg" />
      </Head>
      <Title />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}
