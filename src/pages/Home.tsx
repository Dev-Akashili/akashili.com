import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  useColorMode,
  IconButton
} from "@chakra-ui/react";
import { data, page } from "../data";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignItems="center" justifyContent="center" height={{ base: "85vh", md: "95vh", lg: "95vh" }}>
      <Box>
        <Flex
          justifyContent="flex-end"
          p={page.layoutPadding}
          m={page.layoutMargin}
        >
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            position="absolute"
            top={page.layoutPadding}
            right={page.layoutPadding}
            fontSize="3xl"
          />
        </Flex>
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
