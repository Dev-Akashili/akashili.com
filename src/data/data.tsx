import { Github, Linkedin, Mail } from "lucide-react";

export const navlinks: { name: string; to: string }[] = [
  {
    name: "RESUME",
    to: "https://drive.google.com/file/d/1jdMOFJ-EhDveKA8bXspMQ8qETs1xv6YZ/view"
  },
  { name: "PROJECTS", to: "/projects" },
  { name: "CONTACT ME", to: "/contact" }
];

export const contactIcons = [
  { element: <Github />, link: "https://github.com/Dev-Akashili" },
  { element: <Linkedin />, link: "https://www.linkedin.com/in/akashili/" },
  { element: <Mail />, link: "/contact" }
];
