import Image from "next/image";
import { motion } from "framer-motion";
import { slideFromRight } from "../styles/animations";

export default function ExperienceCard(props: ProjectProps) {
  const { position, company, date, tools, description, img } = props;
  const textColor = "text-blue-800";

  return (
    <div className="flex flex-col md:flex-row my-6 items-center ">
      <div className="w-2/12 flex justify-items-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
        >
          <div className="relative sm:ml-8 rounded-full bg-white h-16 w-16 m-auto flex mb-4 relative after:absolute after:bg-white after:w-1 after:h-96 after:-mt-8 after:ml-8 z-0 ">
            {/* <p className="absolute ml-14 -mt-2 font-mono text-sm text-violet-300">
            +xp
          </p> */}
            <Image
              src={img}
              alt={company + " logo"}
              width={40}
              height={40}
              className="m-auto z-10"
            />
          </div>
        </motion.div>
      </div>

      <div className="w-9/12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideFromRight}
        >
          <div className="bg-white rounded-lg p-6 border-t-8 border-blue-300">
            <p className={textColor + " text-xl mb-1"}>
              <span className="font-bold">{position}</span> @ {company}
            </p>
            <p className={"text-blue-500" + " text-sm italic mb-1"}>{tools}</p>
            <p className={textColor + " mb-1"}>{description}</p>
            <p className={"text-slate-500" + " text-sm"}>{date}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

interface ProjectProps {
  position: string;
  company: string;
  date: string;
  description: string;
  tools: string;
  img: StaticImageData;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
