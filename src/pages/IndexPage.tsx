import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";
import { Flex, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PageLink from "../components/PageLink";

const PAGE_LINKS = [
  {
    icon: <GitHubLogoIcon />,
    text: "GitHub",
    link: "https://github.com/Dev-Akashili"
  },
  {
    icon: <LinkedInLogoIcon />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/akashili"
  }
];

const Span = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <span
      style={{
        fontWeight: "bold",
        color: colorMode === "dark" ? "white" : "black"
      }}
    >
      {children}
    </span>
  );
};

const IndexPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === "dark" ? "white" : "black";

  return (
    <Flex
      flexDirection={"column"}
      gap={"35px"}
      mt={{ base: "25px", md: "50px", lg: "50px" }}
    >
      <Flex
        gap={"8px"}
        flexDir={{ base: "column", md: "row", lg: "row" }}
        fontSize={{ base: "35px", md: "40px", lg: "45px" }}
        fontWeight={"semibold"}
      >
        <Text>Hello,</Text>
        <Text>I'm Emeka Akashili</Text>
      </Flex>
      <Text fontSize={{ base: "md", md: "17px", lg: "lg" }}>
        I am a <Span>Software Engineer</Span> current working at the{" "}
        <Span>University of Nottingham</Span>, on the{" "}
        <Span>Digital Research Service</Span> team.
      </Text>
      <Text fontSize={{ base: "md", md: "17px", lg: "lg" }}>
        I am also building a website called{" "}
        <span>
          <a
            href={"https://github.com/Dev-Akashili/sponsorship-base"}
            target={"_blank"}
            style={{
              fontWeight: "bold",
              marginLeft: "5px",
              marginRight: "5px",
              borderBottom: "1px solid",
              color: linkColor,
              cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#3182ce")}
            onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
          >
            Sponsorship Base
          </a>
        </span>{" "}
        which will help professionals in Uk and Europe to find jobs that offer
        visa sponsorship.
      </Text>
      <Text fontSize={{ base: "md", md: "17px", lg: "lg" }}>
        I am proficient in fullstack software development using programming
        languages such as <Span>Typescript</Span>, <Span>C#</Span> and{" "}
        <Span>Python</Span> utilizing frameworks including{" "}
        <Span>.NET Core</Span>, <Span>React</Span> and <Span>Next.js</Span>.
      </Text>
      <Flex gap={"20px"} alignItems="center">
        {PAGE_LINKS.map((item) => (
          <PageLink
            key={item.text}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
        <Link to={"/contact"}>
          <PageLink icon={<EnvelopeClosedIcon />} text={"Contact"} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
