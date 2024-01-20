import { Box, Flex } from "@chakra-ui/react";
import Project from "../components/Project";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <Flex
      p="20px 150px"
      flexWrap="wrap"
      gap="50px"
      justifyContent="space-between"
    >
      {projects.map((project, index) => (
        <Box key={index} w="45%">
          <Project
            name={project.name}
            description={project.description}
            link={project.link}
            stack={project.stack}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default Projects;
