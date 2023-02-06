import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import { data, page } from "../data";

export const Home = () => {
  return (
    <Flex alignItems="center" justifyContent="center" height="100vh">
      <Box>
        <Text fontSize={page.heading}>Emeka Akashili</Text>
        <Text fontSize={page.subHeading} align="center" color="gray.500">
          Fullstack Software Engineer
        </Text>
        <Flex
          direction="row"
          justify="space-around"
          p={page.layoutPadding}
          m={page.layoutMargin}
        >
          {data.map((data) => (
            <Link style={data.style} href={data.link} target="_blank">
              <Button
                leftIcon={data.lefIcon}
                variant={data.variant}
                colorScheme={data.colorScheme}
                _hover={data.hover}
                m={page.buttonMargin}
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
