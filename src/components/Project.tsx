import {
  Box,
  Button,
  Collapse,
  Flex,
  Image,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text,
  useColorMode,
  useDisclosure
} from "@chakra-ui/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectProps {
  name: string;
  description: string;
  imageLink: string;
  githubLink: string;
  stack: string[];
}

const Project = ({
  name,
  description,
  githubLink,
  imageLink,
  stack
}: ProjectProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Stack
      gap={3}
      onMouseEnter={() => {
        onToggle();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        onToggle();
        setIsHovered(false);
      }}
    >
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
          fontWeight="bold"
        >
          {name}
        </Text>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          border={colorMode === "light" ? "1.5px solid" : "none"}
          overflow="hidden"
        >
          <Image
            src={imageLink}
            minH={{ base: "250px", md: "300px", lg: "300px" }}
            minW="100px"
            transition="transform 0.3s ease"
            transform={isHovered ? `scale(1.3)` : ""}
            filter={isHovered ? "blur(3px)" : ""}
          />
          <Box position="absolute">
            <Collapse in={isOpen}>
              <Link
                _hover={{ textDecor: "none" }}
                fontWeight="bold"
                href={githubLink}
              >
                <Button
                  size={{ base: "sm", md: "lg", lg: "lg" }}
                  variant="outline"
                  borderColor={colorMode === "light" ? "orange" : "orange.300"}
                  color={colorMode === "light" ? "orange" : "orange.300"}
                  borderRadius={0}
                  _hover={{ bgColor: "orange.300", color: "black" }}
                  display={isHovered ? "" : "none"}
                  rightIcon={<ExternalLink height="18px" />}
                >
                  View in Github
                </Button>
              </Link>
            </Collapse>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "lg", md: "xl", lg: "xl" }}
          fontWeight="bold"
        >
          Description
        </Text>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize={{ base: "sm", md: "md", lg: "md" }}
        >
          {description}
        </Text>
      </Box>
      <Box>
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "md", md: "lg", lg: "lg" }}
          fontWeight="bold"
        >
          Tech Stack
        </Text>
        <Flex flexWrap="wrap" gap={3}>
          {stack.map((item, index) => (
            <Tag
              key={index}
              size={{ base: "md", md: "lg", lg: "lg" }}
              variant={colorMode === "light" ? "outline" : "subtle"}
              colorScheme="orange"
              borderRadius={0}
            >
              <TagLabel>{item}</TagLabel>
            </Tag>
          ))}
        </Flex>
      </Box>
    </Stack>
  );
};

export default Project;
