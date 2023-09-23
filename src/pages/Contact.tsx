import Heading from "../components/Heading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { fade, pop } from "../../styles/animations";

export default function Contact() {
  return (
    <div id="contact" className="my-20">
      <Heading name="Contact" color="bg-orange-400" />
      <div className="p-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fade(0, 0.5)}
        >
          <div className="bg-orange-800 p-6 rounded-lg border-2 border-orange-200">
            <h3 className="text-xl text-amber-400 font-bold">
              Let&apos;s connect!
            </h3>
            <p>
              Thanks for visiting my website! If anything here piqued your
              interest, whether that be about something I worked on or related
              to my interests or hobbies, feel free to reach out - I&apos;d love
              to have a chat :)
            </p>
          </div>
        </motion.div>
        <div className="flex flex-row m-auto justify-center max-w-6/12 md:w-6/12 mt-16">
          <a
            href="https://github.com/angelaw7"
            target={"_blank"}
            rel="noreferrer"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={pop(0)}
              whileHover={{ scale: 1.2 }}
            >
              <div className="bg-pink-400 rounded-full w-28 h-28 hover:bg-pink-500 justify-center m-4 flex">
                <FaGithub className="text-white w-14 h-14 m-auto" />
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
              whileInView="visible"
              variants={pop(0.25)}
              whileHover={{ scale: 1.2 }}
            >
              <div className="bg-blue-400 rounded-full w-28 h-28 hover:bg-blue-500 justify-center m-4 flex">
                <FaLinkedin className="text-white w-14 h-14 m-auto hover:w-16 hover:h-16" />
              </div>{" "}
            </motion.div>
          </a>
          <a href="angelaxwang7@gmail.com" target={"_blank"} rel="noreferrer">
            {" "}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={pop(0)}
              whileHover={{ scale: 1.2 }}
            >
              <div className="bg-purple-400 rounded-full w-28 h-28 hover:bg-purple-500 justify-center m-4 flex">
                <IoMdMail className="text-white w-14 h-14 m-auto hover:w-16 hover:h-16" />
              </div>{" "}
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
}
