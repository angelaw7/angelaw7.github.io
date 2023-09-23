import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideFromRight } from "../../styles/animations";

export default function ProjectCard(props: ProjectCardProps) {
  const { title, tools, link, description } = props;
  const textColor = "text-pink-700";

  return (
    <div className="flex flex-col md:w-6/12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideFromRight}
        whileHover={{ scale: 1.05, zIndex: 1 }}
      >
        <div className="bg-white p-6 m-4 rounded-lg border-t-8 border-pink-300">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-between"
          >
            <h1 className={textColor + " font-bold text-xl mb-1"}>{title}</h1>
            <FaGithub className={textColor + " w-6 h-6"} />
          </a>
          <p className={"text-pink-500" + " text-sm italic mb-1"}>{tools}</p>
          <p className={textColor}>{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  tools: string;
  link: string;
  description: string;
}
