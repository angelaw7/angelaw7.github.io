import { ReactNode } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { pop } from "../styles/animations";

export default function Contact({ ...props }: Props) {
  const showBgColour = props.showBgColour ?? false;
  const delay = props.delay ?? 0;

  const logoStyle = `text-white w-8 h-8 m-auto`;
  const bubbleStyle = `rounded-full w-14 h-14 justify-center m-4 flex`;

  return (
    <div id="contact" className="mt-6">
      <div className="">
        <div className="flex flex-row m-auto justify-center max-w-6/12 md:w-6/12">
          <a
            href="https://github.com/angelaw7"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={pop(delay + 0)}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`${bubbleStyle} hover:bg-yellow-500 ${
                  showBgColour ? "bg-yellow-400" : ""
                }`}
              >
                <FaGithub className={logoStyle} />
              </div>
            </motion.div>
          </a>

          <a
            href="https://www.linkedin.com/in/angelaxwang7/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={pop(delay + 0.25)}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`${bubbleStyle} hover:bg-blue-500 ${
                  showBgColour ? "bg-blue-400" : ""
                }`}
              >
                <FaLinkedin className={logoStyle} />
              </div>{" "}
            </motion.div>
          </a>
          <a href="angelaxwang7@gmail.com" target={"_blank"} rel="noreferrer">
            {" "}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={pop(delay + 0)}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`${bubbleStyle} hover:bg-red-500 ${
                  showBgColour ? "bg-red-400" : ""
                }`}
              >
                <IoMdMail className={logoStyle} />
              </div>{" "}
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
}

interface Props {
  children?: ReactNode;
  showBgColour?: boolean;
  delay?: number;
}
