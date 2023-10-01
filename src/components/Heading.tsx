import { motion } from "framer-motion";
import { slideFromTop } from "../styles/animations";
import styled from "styled-components";

export default function Heading({ name, color }: HeadingProp) {
  return (
    <HeadingBox>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideFromTop}
      >
        <div className={"pt-5 mb-6 pl-4 align-text-bottom"}>
          <div className={color + " w-full md:w-3/6 mt-2 h-8 -m-2 "}>
            <h2 className="pl-4 text-4xl font-bold -mt-3 absolute">{name}</h2>
          </div>
        </div>
      </motion.div>
    </HeadingBox>
  );
}

interface HeadingProp {
  name: string;
  color: string;
}

const HeadingBox = styled.div`
  width: 50vw;
`;
