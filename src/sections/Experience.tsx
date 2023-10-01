import Heading from "../components/Heading";
import ExperienceCard from "../components/ExperienceCard";
import Section from "../components/Section";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <div id="experience">
      <Section bgColour="bg-blue-300">
        <Heading name="Experience" color="bg-blue-300" />
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
      </Section>
    </div>
  );
}
