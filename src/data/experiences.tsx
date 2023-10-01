import RecursionLogo from "../imgs/recursion.png";
import FyelabsLogo from "../imgs/fyelabs.jpg";
import MLHLogo from "../imgs/mlh.png";

export const experiences = [
  // {
  //   position: "Software Engineering Co-Op",
  //   company: "FreshBooks",
  //   date: "Sep 2023 - Dec 2023",
  //   description: "",
  // },
  // {
  //   position: "Software Engineering Co-Op",
  //   company: "A Thinking Ape Entertainment",
  //   date: "May 2023 - Aug 2023",
  //   description: "",
  // },
  {
    position: "Software Developer (Part-Time)",
    company: "FYELABS",
    tools: "Golang, Docker, PostgreSQL",
    date: "Jan 2023 - Apr 2023",
    description: `Collaborated with ML engineers to integrate 4 models into backend
    Python script, enabling anomalies to be detected in real time. Implemented 6 REST APIs
    in Golang and discussed with frontend engineers to determine requirements and payload
    format.`,
    img: FyelabsLogo,
  },
  {
    position: "Software Engineering Intern",
    company: "Recursion Pharmaceuticals",
    tools: "React, Flask, PostgreSQL, GCP, Docker, CodeFresh, GraphQL",
    date: "May 2022 - Aug 2022",
    description: `Designed and developed an internal fullstack application to serve as the user 
      interface of a review process using React, Flask and PostgreSQL, reducing the time it
      takes to push a single ticket to the next step in the process by over 70% on average.
      Identified and verified ongoing project requirements by regularly acquiring feedback
      from stakeholders.`,
    img: RecursionLogo,
  },
  {
    position: "Site Reliability Engineering Fellow",
    company: "Major League Hacking & Sponsored by Meta",
    tools: "React, Flask, PostgreSQL, AWS, Docker, GitHub Actions",
    date: "Jun 2021 - Aug 2021",
    description: `Selected as one of 10,000 applicants for a project-based program focused on 
      developing DevOps, site reliability engineering, and software engineering skills.
      Followed the Linux Foundation Training & Certification curriculum under mentorship
      from Meta engineers. Learned about and utilized AWS services, containerization, CI/CD,
      testing, monitoring, and networking.`,
    img: MLHLogo,
  },
];
