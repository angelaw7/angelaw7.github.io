import Image from "next/image";

export default function ExperienceCard(props: ProjectProps) {
  const { position, company, date, tools, description, img } = props;
  const textColor = "text-blue-800";

  return (
    <div className="flex flex-row my-6">
      <div className="w-2/12 flex justify-items-center">
        <div className="rounded-full bg-white h-16 w-16 m-auto flex z-10">
          <Image
            src={img}
            alt="Recursion logo"
            width={40}
            height={40}
            className="m-auto"
          />
        </div>
      </div>
      <div className="w-9/12">
        <div className="bg-white rounded-lg p-6 border-t-8 border-blue-300 m-1 hover:m-0">
          <p className={textColor + " text-xl mb-1"}>
            <span className="font-bold">{position}</span> @ {company}
          </p>
          <p className={"text-blue-500" + " text-sm italic mb-1"}>{tools}</p>
          <p className={textColor + " mb-1"}>{description}</p>
          <p className={"text-slate-500" + " text-sm"}>{date}</p>
        </div>
      </div>
      <div className="absolute bg-white h-2/5 w-1 ml-24 z-0" />
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
