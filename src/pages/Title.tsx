import Fox from "../components/Fox";
import { motion } from "framer-motion";
import { fade } from "../../styles/animations";

export default function Title() {
  return (
    <div className="flex justify-center mt-0 h-screen flex-col align-middle justify-items-center my-20">
      <div className="mx-auto my-4">
        <motion.div initial="hidden" animate="visible" variants={fade(0)}>
          <motion.div
            transition={{ type: "spring", duration: 4, repeat: Infinity }}
            animate={{
              y: [0, -10, 0],
            }}
          >
            <Fox width="140" height="140" fill="white" />
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial="hidden" animate="visible" variants={fade(0)}>
        <h1 className="text-6xl font-bold text-center mb-2">
          hey, I&apos;m Angela!
        </h1>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fade(1)}>
        <h2 className="text-3xl text-center mb-10">
          I&apos;m a{" "}
          <span className="text-purple-400">software engineering student</span>
        </h2>
      </motion.div>

      <div className="flex-col w-min  mx-auto font-mono">
        <motion.div initial="hidden" animate="visible" variants={fade(2)}>
          <a href="#about">
            <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
              about
            </p>
          </a>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fade(2.4)}>
          <a href="#experience">
            <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
              experience
            </p>
          </a>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fade(2.8)}>
          <a href="#projects">
            <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
              projects
            </p>
          </a>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fade(3.2)}>
          <a href="#contact">
            <p className="text-center text-xl my-2 hover:text-purple-400 hover:text-2xl leading-8">
              contact
            </p>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
