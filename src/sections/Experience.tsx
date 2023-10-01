import Heading from "../components/Heading";
import ExperienceCard from "../components/ExperienceCard";
import Section from "../components/Section";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <div id="experience">
      <Section bgColour="bg-blue-300">
        <Heading name="Experience" color="bg-blue-300" />
        <p className="px-6">Places I&apos;ve worked!</p>
        <div className="p-2 overflow-hidden">
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
