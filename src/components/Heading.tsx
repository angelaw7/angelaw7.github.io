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
        <div className={color + " pt-5 mb-6 pl-4 align-text-bottom"}>
          <h2 className="text-4xl font-bold">{name}</h2>
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
