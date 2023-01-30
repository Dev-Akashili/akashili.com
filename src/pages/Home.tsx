import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import { data } from "../data";

export const Home = () => {
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box>
        <Text fontSize={{ sm: "7xl", md: "8xl", lg: "8xl" }}>
          Emeka Akashili
        </Text>
        <Text
          fontSize={{ sm: "3xl", md: "4xl", lg: "4xl" }}
          align="center"
          color="gray.500"
        >
          Fullstack Software Engineer
        </Text>
        <Flex
          direction="row"
          justify="space-around"
          p="25px"
          m={{ sm: "0px 10px", md: "0px 50px", lg: "0px 50px" }}
        >
          {data.map((data) => (
            <Link style={data.style} href={data.link} target="_blank">
              <Button
                leftIcon={data.lefIcon}
                variant={data.variant}
                colorScheme={data.colorScheme}
                _hover={data.hover}
              >
                {data.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
