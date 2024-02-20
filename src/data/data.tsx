import { Github, Linkedin, Mail } from "lucide-react";

export const navlinks: { name: string; to: string }[] = [
  {
    name: "RESUME",
    to: "https://drive.google.com/file/d/1jdMOFJ-EhDveKA8bXspMQ8qETs1xv6YZ/view"
  },
  { name: "PROJECTS", to: "/projects" },
  { name: "CONTACT ME", to: "/contact" }
];

export const contactIcons: { element: React.ReactNode; link: string }[] = [
  { element: <Github />, link: "https://github.com/Dev-Akashili" },
  { element: <Linkedin />, link: "https://www.linkedin.com/in/akashili/" },
  { element: <Mail />, link: "/contact" }
];

export const projects: {
  name: string;
  description: string;
  imageLink: string;
  githubLink: string;
  stack: string[];
}[] = [
  {
    name: "Star Platinum",
    description:
      "An open source project being built to simplify user authentication and authorization for developers. It offers intuitive API endpoints and a user interface to streamline user management integration, allowing you to concentrate on your core application.",
    imageLink: "././star-platinum.png",
    githubLink: "https://github.com/Dev-Akashili/star-platinum",
    stack: [
      "C#",
      "ASP.NET Core",
      "Typescript",
      "Next.js",
      "Docker",
      "PostgreSQL"
    ]
  },
  {
    name: "RedCap Monitor",
    description:
      "A project in collaboration with Nottingham University Hospital, being built to monitor the health of RedCap Cloud instances. The project currently consists of a web application along with the integration of an Azure Functions app.",
    imageLink: "././redcap.png",
    githubLink: "https://github.com/Health-Informatics-UoN/rcc-monitor",
    stack: [
      "C#",
      "ASP.NET Core",
      "Typescript",
      "Next.js",
      "Docker",
      "PostgreSQL",
      "Keycloak"
    ]
  },
  {
    name: "CaRROT Mapper",
    description:
      "A web application designed for the mapping process of datasets to OMOP standard and generation of mapping rules in JSON format. The application offers automated mapping from various vocabularies, enables rule reuse across datasets, and allows manual rule creation.",
    imageLink: "././carrot.png",
    githubLink: "https://github.com/Health-Informatics-UoN/CaRROT-Mapper",
    stack: ["Python", "Django", "React", "PostgreSQL", "Azure Functions"]
  },
  {
    name: "Originate Merchant Portal",
    description:
      "A fintech software credit tool that automates loan origination process. It incorporates web forms for capturing loan application data, conducting verification, and also seamlessly integrates with credit bureaus, AML/KYC services, and various other systems.",
    imageLink: "././originate.png",
    githubLink: "https://indicina.co/originate",
    stack: [
      "Typescript",
      "React",
      "Node.js",
      "Nestjs",
      "Docker",
      "GraphQL",
      "Apollo Client",
      "MongoDB",
      "RabbitMQ"
    ]
  }
];
