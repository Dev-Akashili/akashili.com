import { Box, Flex } from "@chakra-ui/react";
import Project from "../components/Project";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <Flex
      p={{ base: "20px 25px", lg: "20px 150px" }}
      flexWrap="wrap"
      gap="50px"
      justifyContent={{
        sm: "space-between",
        md: "center",
        lg: "space-between"
      }}
      maxW="2000px"
    >
      {projects.map((project, index) => (
        <Box key={index} w={{ base: "100%", md: "70%", lg: "45%" }}>
          <Project
            name={project.name}
            description={project.description}
            imageLink={project.imageLink}
            githubLink={project.githubLink}
            stack={project.stack}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default Projects;
