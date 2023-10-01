import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div id="projects">
      <Section bgColour="bg-rose-300">
        <Heading name="Projects" color="bg-rose-300" />
        <div className="px-6">
          <p>Experimenting and making things for fun :&gt;</p>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row p-6">
          {projects.map((project) => {
            return (
              <ProjectCard
                img={project.img}
                key={project.title}
                title={project.title}
                tools={project.tools}
                link={project.link}
                description={project.description}
              />
            );
          })}
        </div>
        {/* TODO: add button when new projects page is done */}
        {/* <div className="flex justify-center">
          <button className="bg-rose-400 text-white border-2 border-rose-400 px-4 py-2 rounded-lg neutral-50">
            View more &#8594;
          </button>
        </div> */}
      </Section>
    </div>
  );
}
