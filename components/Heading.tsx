import { motion } from "framer-motion";
import { slideFromTop } from "../styles/animations";

export default function Heading({ name, color }: HeadingProp) {
  return (
    <div className="">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideFromTop}
      >
        <div
          className={
            color +
            " pb-3 pt-5 mb-6 border-b-2 border-r-2 border-slate-100 font-mono"
          }
        >
          <h2 className="text-3xl text-center font-bold">{name}</h2>
        </div>
      </motion.div>
    </div>
  );
}

interface HeadingProp {
  name: string;
  color: string;
}
