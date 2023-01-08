import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props: ProjectCardProps) {
  const { title, tools, link, description } = props;
  const textColor = "text-pink-700";

  return (
    <div className="flex flex-col w-6/12">
      <div className="bg-white p-6 m-3 rounded-lg border-t-8 border-pink-300 hover:m-2 ">
        <a
          href={link}
          target="_blank"
          className="flex flex-row justify-between"
        >
          <h1 className={textColor + " font-bold text-xl mb-1"}>{title}</h1>
          <FaGithub className={textColor + " w-6 h-6"} />
        </a>
        <p className={"text-pink-500" + " text-sm italic mb-1"}>{tools}</p>
        <p className={textColor}>{description}</p>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  tools: string;
  link: string;
  description: string;
}
