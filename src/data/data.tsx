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
  link: string;
  stack: string[];
}[] = [
  {
    name: "STAR PLATINUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/",
    stack: ["Typescript", "React", "C#", "ASP.NET Core"]
  },
  {
    name: "TSCD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/",
    stack: ["Typescript", "React", "C#", "ASP.NET Core"]
  },
  {
    name: "COMPANY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "/",
    stack: ["Typescript", "React", "C#", "ASP.NET Core"]
  }
];
