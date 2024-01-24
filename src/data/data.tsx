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
    name: "RedCap Monitor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "././redcap.png",
    githubLink: "/",
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
    name: "Star Platinum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "././star-platinum.png",
    githubLink: "/",
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
    name: "Originate Merchant Portal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "",
    githubLink: "/",
    stack: ["Typescript", "React", "GraphQL", "Apollo Client", "MongoDB"]
  },
  {
    name: "Tissue Sample Collectioin Details",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageLink: "",
    githubLink: "/",
    stack: ["Typescript", "React", "Nestjs", "PostgreSQL"]
  }
];
