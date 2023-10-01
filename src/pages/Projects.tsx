import Heading from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import DevUpImg from "../imgs/DevUpImg.png";
import PersonalSiteImg from "../imgs/PersonalSite.png";
import DiscordBotImg from "../imgs/DiscordBot.png";
import PathfindingVisualizerImg from "../imgs/PathfindingVisualizer.png";

export default function Projects() {
  const projects = [
    {
      title: "DevUp",
      tools: "React, Flask, PostgreSQL, Docker",
      link: "https://github.com/LaloVene/MLH-PE-Project",
      description:
        "A fullstack CRUD web application built to help developers find others to collaborate with on projects. Dockerized with CI/CD using GitHub Actions and monitoring with cAdvisor, Grafana, and Prometheus.",
      img: DevUpImg,
    },
    {
      title: "Personal Website v2",
      tools: "Next.js, TypeScript, Tailwind",
      link: "https://github.com/angelaw7/angelaw7.github.io",
      description:
        "This website here! Wanted to try something new after using a bunch of React and Material UI so I went with Next.js and Tailwind. Designed using a minamalistic game-styled theme inspired by some indie games that I like :)",
      img: PersonalSiteImg,
    },
    {
      title: "London Pathfinding Visualizer",
      tools: "Python, Tkinter",
      link: "https://github.com/angelaw7/pathfinding-visualizer",
      description:
        "Pathfinding visualizer built with Tkinter to observe the performance of several graph algorithms using London's subway network data. Can visualize and compare Dijkstra's algorithm, A* algorithm, BFS, and traveling salesman's problem.",
      img: PathfindingVisualizerImg,
    },
    // {
    //   title: "Python -> Assembly Translator",
    //   tools: "Python",
    //   link: "https://github.com/angelaw7/python-to-assembly",
    //   description:
    //     "Translates Python code into PEP/9 assembly code, created for a course project. The translator parses the abstract syntax tree (AST) from the Python code and pattern-matches to generate assembly code, supports basic variables, loops, and functions.",
    // },
    // {
    //   title: "Roomie Huddle App",
    //   tools: "React Native, SQLite, Android SDK",
    //   link: "https://github.com/arzekeil/homies_management_system",
    //   description:
    //     "Android application designed using React Native to manage typical university roommate needs such as organizing chores, managing payments, and posting announcements/discussion threads. Supports CRUD operations.",
    // },
    {
      title: "4fun Discord Bot",
      tools: "Python, Discord.py, Riot/Twitch/Jikan API",
      link: "https://github.com/angelaw7/discord-bot",
      description:
        "A Python Discord bot that interacts with Twitch, Riot Games, and Jikan API to fetch data and embed it in a Discord message. Can change user roles on message reactions, purge messages, and search for definitions on Urban Dictionary.",
      img: DiscordBotImg,
    },
  ];

  return (
    <div id="projects">
      <Section bgColour="bg-rose-300">
        <Heading name="Projects" color="bg-rose-300" />
        <div className="px-6">
          <p>Experimenting and creating new things for fun :&gt;</p>
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
