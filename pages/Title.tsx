import Fox from "../imgs/fox.svg";
import Image from "next/image";

export default function Title() {
  return (
    <div className="flex justify-center mt-0 h-screen flex-col align-middle justify-items-center my-20">
      <Image src={Fox} alt="fox!" className="w-full h-40 mb-10" />
      <h1 className="text-6xl font-bold text-center mb-2">hey, I'm Angela!</h1>
      <h2 className="text-3xl text-center mb-10">
        I'm a{" "}
        <span className="text-purple-400">software engineering student</span>
      </h2>

      <div className="flex-col w-min  mx-auto">
        <a href="#about">
          <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
            about
          </p>
        </a>
        <a href="#experience">
          <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
            experience
          </p>
        </a>
        <a href="#projects">
          <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
            projects
          </p>
        </a>
        <a href="#contact">
          <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
            contact
          </p>
        </a>
      </div>
    </div>
  );
}
