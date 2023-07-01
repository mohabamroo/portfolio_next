"use client";

import { useState } from "react";

const projects = [
  {
    title: "Preventia Care",
    description:
      "Preventia Care is an AI-enhanced preventive medicine and primary care platform for healthcare professionals. It offers features such as AI-enabled diagnosis, secure messaging, and patient monitoring to improve patient care. ",
    link: "https://mohabamroo.com",
    preview: "/img/projects/preventia.png",
    grid: "col-span-3 row-span-1",
    technologies: [
      "Django REST",
      "Angular",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Celery",
      "Redis",
      "CircleCI"
    ],
    period: "2019 - 2021",
    team: "5-10 people"
  },
  {
    title: "Algomed Clinics",
    description:
      "Algomed Clinics is a platform that enables Canadian patients to book appointments with a primary physician. With the help of these technologies, the platform has successfully served over 15k patients.    ",
    link: "https://mohabamroo.com",
    preview: "/img/projects/algomed.png",
    grid: "col-span-2 row-span-1",
    technologies: [
      "Django REST",
      "Angular",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "ECS",
      "Sentry",
      "Twilio",
      "Mailjet",
      "Square",
      "Stripe",
      "AWS"
    ],
    period: "2020 - 2023",
    team: "20-30 people",
    featured:
      "https://www.cbc.ca/news/canada/nova-scotia/private-ns-medical-clinic-says-ease-health-care-system-1.6549725"
  },
  {
    title: "ChurchPlan",
    description:
      "An integrated solution providing everything the church management and congregation need in one place. It replaces a variety of tools to accomplish various tasks. Integrated with 10 different chruches in Canada.",
    link: "https://mohabamroo.com",
    preview: "/img/projects/churchplan.png",
    services: "Web, Mobile, Backend, DevOps, Scrum, Product Management",
    grid: "col-span-2 row-span-1",
    technologies: [
      "Node.js",
      "Angular",
      "React Native",
      "MySQL",
      "Kubernetes",
      "DigitalOcean",
      "Firebase",
      "Codepush",
      "Bullmq",
      "Redis",
      "Sentry",
      "Twilio",
      "Mailjet",
      "Worldline"
    ],
    period: "2021 - 2023",
    team: "5-10 people"
  },
  {
    title: "Credify",
    description:
      "Credify is a platform that extracts financial data from users to create a comprehensive financial behavior profile. The platform offers a mobile SDK and RESTful API for data extraction and a backend model using FastAPI, which is hosted on AWS. The project is designed to be scalable, secure, and highly accurate in data extraction and analysis.",
    link: "https://mohabamroo.com",
    preview: "/img/projects/credify.png",
    grid: "col-span-3 row-span-1",
    technologies: [
      "Python",
      "FastAPI",
      "AWS",
      "Docker",
      "PostgreSQL",
      "DynamoDb",
      "Sentry",
      "Github Actions",
      "Terraform",
      "Docusourus",
      "Kafka/MSK"
    ],
    period: "2022 - 2023",
    team: "1-5 people"
  },
  {
    title: "Laivent",
    description:
      "Laivent is an app designed to help users find and book underground and trending artists in Egypt for different events such as concerts, weddings, and corporate events. The platform offers a user-friendly interface and a wide range of artists, from singers to choreographers.",
    link: "https://mohabamroo.com",
    preview: "/img/projects/laivent.png",
    grid: "col-span-3 row-span-1",
    technologies: ["Node.js", "Flutter", "MongoDB", "Docker", "AWS"],
    period: "2021 - 2022",
    team: "1-3 people"
  },
  {
    title: "Check Me",
    description:
      "Check me is a marketplace mobile application that provides on-demand blood sampling services via multiple partner labs, offering a timely service within a two-hour window from the moment of booking.",
    link: "https://mohabamroo.com",
    preview: "/img/projects/checkme.png",
    grid: "col-span-2 row-span-1",
    technologies: [
      "Node.js",
      "React Native",
      "Socket.io",
      "Firebase",
      "Redis",
      "DigitalOcean"
    ],
    period: "2020 - 2021",
    team: "1-5 people"
  },
  {
    title: "Buzzbot",
    description:
      "BuzzBot is the 1st digital advertising roBot designed using AI technology to help you make your ads simply, reach your right customers and track your ads performance live without any hassle!",
    link: "https://mohabamroo.com",
    preview: "/img/projects/buzzbot.png",
    grid: "col-span-2 row-span-1",
    technologies: [
      "Ruby on rails",
      "React Native",
      "Graphql",
      "Google Maps",
      "Facebook Ads"
    ],
    period: "2019 - 2020",
    team: "1-5 people"
  },
  {
    title: "Remoteplatz",
    description:
      "Remoteplatz is a platform that connects companies with remote software engineers. The platform offers a wide range of services, from hiring to managing remote teams. The platform is designed to be scalable, secure, and highly accurate in data extraction and analysis.",
    link: "https://mohabamroo.com",
    preview: "/img/projects/remoteplatz.png",
    grid: "col-span-3 row-span-1",
    technologies: [
      "Django REST",
      "Vue.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Sentry",
      "Twilio",
      "Sendgrid",
      "Firebase"
    ],
    period: "2010 - 2021",
    team: "1-5 people"
  }
];
const renderProject = (project: any) => (
  <div className="card card-compact bg-base-100 shadow-xl h-full transition-all duration-500">
    <figure>
      <img className="object-cover" src={project.preview} alt="Preview" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{project.title}</h2>
      <p>
        {project.description}
        <br />
        {project.featured && (
          <>
            <br />
            <a className="text-accent" href={project.featured} target="_blank">
              Featured Article
            </a>
            <br />
          </>
        )}
        <br />

        <span className="italic">Technologies</span>
        <br />

        <span>{project.technologies?.join(", ") || "N/A"}</span>
        {project.services && (
          <>
            <br />
            <br />
            <span className="italic">Services</span>
            <br />
            <span>{project.services}</span>
          </>
        )}
      </p>
      <div className="card-actions justify-between">
        <div className="badge badge-default text-xs italic">{project.team}</div>
        <div className="badge badge-neutral text-xs">{project.period}</div>
      </div>
    </div>
  </div>
);
export default function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState(projects.slice(0, 4));

  const showMore = () => {
    setVisibleCards(projects);
  };
  const showLess = () => {
    setVisibleCards(projects.slice(0, 4));
  };

  return (
    <div id="projects" className="hero min-200 py-10 my-10">
      <div className="max-w-5xl">
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold text-center text-bold text-secondary">
            Projects & Works
          </h1>
        </div>
        <div className="min-w-full">
          <div className="grid grid-cols-5 gap-3 hidden lg:grid">
            {visibleCards.map((project, idx) => (
              <div key={idx} className={"h-full " + project.grid}>
                {renderProject(project)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-5 gap-3 lg:hidden">
            {visibleCards.map((project, idx) => (
              <div key={idx} className={"h-full col-span-5"}>
                {renderProject(project)}
              </div>
            ))}
          </div>

          {visibleCards.length < projects.length && (
            <div className="flex justify-center items-center">
              <button
                className="btn-link text-white px-4 py-2 rounded-md mt-4 m-auto"
                onClick={showMore}
              >
                Show more
              </button>
            </div>
          )}
          {visibleCards.length > 4 && (
            <div className="flex justify-center items-center">
              <button
                className="btn-link text-white px-4 py-2 rounded-md mt-4 m-auto"
                onClick={showLess}
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
