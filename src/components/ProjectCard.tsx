import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideFromRight } from "../styles/animations";
import Image from "next/image";

export default function ProjectCard(props: ProjectCardProps) {
  const { title, tools, link, description, img } = props;
  const textColor = "text-pink-700";

  return (
    <div className="flex flex-col md:w-6/12">
      <div className="m-4 max-w-lg rounded-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
          whileHover={{
            scale: 1.03,
            zIndex: 0.2,
            boxShadow: "10px 10px 12px #b3b3b3",
          }}
        >
          <div className="bg-white pb-6 rounded-2xl">
            <div className="mb-4 rounded-tr-2xl rounded-tl-2xl overflow-clip max-h-60">
              {img ? (
                <Image
                  src={img.src}
                  width={1000}
                  height={1000}
                  alt={title + " image"}
                  className="m-auto"
                />
              ) : (
                <div className="bg-neutral-300 w-full h-40"></div>
              )}
            </div>
            <div className="px-6">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row justify-between"
              >
                <h1 className={textColor + " font-bold text-xl mb-1"}>
                  {title}
                </h1>
                <FaGithub className={textColor + " w-6 h-6"} />
              </a>
              <p className={"text-pink-500" + " text-sm italic mb-1"}>
                {tools}
              </p>
              <p className={textColor}>{description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  tools: string;
  link: string;
  description: string;
  img: StaticImageData;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
