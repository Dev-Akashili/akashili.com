import {
  Box,
  Collapse,
  Flex,
  HStack,
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
        <Text fontFamily="sans-serif" fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Box minH="300px" minW="100px" border="2px solid"></Box>
      </Box>
      <Collapse in={isOpen}>
        <Box _hover={{ color: "orange" }}>
          <Link fontWeight="bold" href={link}>
            <Flex>
              <Text textDecoration="underline">View in Github</Text>
              <ExternalLink height="18px" />
            </Flex>
          </Link>
        </Box>
      </Collapse>
      <Box>
        <Text fontFamily="sans-serif" fontSize="xl" fontWeight="bold">
          Description
        </Text>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize="md"
        >
          {description}
        </Text>
      </Box>
      <Box>
        <Text fontFamily="sans-serif" fontSize="lg" fontWeight="bold">
          Tech Stack
        </Text>
        <HStack spacing={4}>
          {stack.map((item, index) => (
            <Tag
              key={index}
              size="lg"
              variant="outline"
              colorScheme="orange"
              borderRadius={0}
            >
              <TagLabel>{item}</TagLabel>
            </Tag>
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

export default Project;
