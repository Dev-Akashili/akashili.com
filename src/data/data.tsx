import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export const data = [
  {
    name: "Resume",
    style: { textDecoration: "none" },
    lefIcon: <FaFileAlt />,
    variant: "outline",
    colorScheme: "whatsapp",
    link: "https://drive.google.com/file/d/1hXPjJWqEt4CeqDtgJDX-ghyv_1M6xGkq/view",
    hover: { bg: "#179948", color: "white" },
  },
  {
    name: "GitHub",
    style: { textDecoration: "none" },
    lefIcon: <FaGithub />,
    variant: "outline",
    colorScheme: "black",
    link: "https://github.com/Dev-Akashili",
    hover: { bg: "black", color: "white" },
  },
  {
    name: "LinkedIn",
    style: { textDecoration: "none" },
    lefIcon: <FaLinkedin />,
    variant: "outline",
    colorScheme: "messenger",
    link: "https://www.linkedin.com/in/akashili/",
    hover: { bg: "#0063D1", color: "white" },
  },
];

export const page = {
  heading: ["6xl", "7xl", "8xl"],
  subHeading: ["2xl", "3xl", "4xl"],
  layoutPadding: ["0px", "10px", "25px"],
  layoutMargin: ["auto", "0px 20px", "0px 50px"],
  buttonMargin: ["20px 5px", "12px 5px", "0px"],
};
