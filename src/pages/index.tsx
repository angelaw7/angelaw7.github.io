import Head from "next/head";
import Title from "./Title";
import About from "./About";
import Footer from "./Footer";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects";

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
      <Contact />
      <Footer />
    </>
  );
}
