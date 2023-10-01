import Heading from "../components/Heading";
import ExperienceCard from "../components/ExperienceCard";
import RecursionLogo from "../imgs/recursion.png";
import FyelabsLogo from "../imgs/fyelabs.jpg";
import MLHLogo from "../imgs/mlh.png";


export default function Experience() {
  const experiences = [
    {
      position: "Software Developer (Part-Time)",
      company: "FYELABS",
      tools: "Golang, Docker, PostgreSQL",
      date: "Jan 2023 - Present",
      description: "",
      img: FyelabsLogo,
    },
    {
      position: "Software Engineering Intern",
      company: "Recursion Pharmaceuticals",
      tools: "React, Flask, PostgreSQL, GCP, Docker, CodeFresh, GraphQL",
      date: "May 2022 - Aug 2022",
      description:
        "Designed and developed an internal fullstack application to serve as the user interface of a review process using React, Flask and PostgreSQL, reducing the time it takes to push a single ticket to the next step in the process by over 70% on average. Identifying and verifying current project requirements by regularly acquiring feedback from stakeholders.",
      img: RecursionLogo,
    },
    {
      position: "Site Reliability Engineering Fellow",
      company: "Major League Hacking & Sponsored by Meta",
      tools: "React, Flask, PostgreSQL, AWS, Docker, GitHub Actions",
      date: "Jun 2021 - Aug 2021",
      description:
        "Selected as one of 10,000 applicants for a project-based program focused on developing DevOps, site reliability engineering, and software engineering skills. Followed the Linux Foundation Training & Certification curriculum under mentorship from Meta engineers. Learned about and utilized AWS services, containerization, CI/CD, testing, monitoring, and networking.",
      img: MLHLogo,
    },
  ];

  return (
    <div id="experience" className="my-20">
      <Heading name="Experience" color="bg-blue-400" />
      <div className="p-2 overflow-hidden">
        {/* <p className="absolute font-mono ml-4 mt-4 text-violet-200">Lvl 3</p> */}
        {experiences.map((experience) => {
          return (

              
                <ExperienceCard
              key={experience.position}
                  position={experience.position}
                  company={experience.company}
                  description={experience.description}
                  tools={experience.tools}
                  date={experience.date}
                  img={experience.img}
                />
              

          );
        })}
      </div>
    </div>
  );
}
