import {
  Box,
  Collapse,
  Flex,
  Link,
  Stack,
  Tag,
  TagLabel,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  stack: string[];
}

const Project = ({ name, description, link, stack }: ProjectProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      gap={3}
      onMouseEnter={() => {
        onToggle();
      }}
      onMouseLeave={() => {
        onToggle();
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
        <Box minH="300px" minW="100px" border="2px solid"></Box>
      </Box>
      <Collapse in={isOpen}>
        <Box _hover={{ color: "orange" }}>
          <Link fontWeight="bold" href={link}>
            <Flex>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                textDecoration="underline"
              >
                View in Github
              </Text>
              <ExternalLink height="18px" />
            </Flex>
          </Link>
        </Box>
      </Collapse>
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
              variant="outline"
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
