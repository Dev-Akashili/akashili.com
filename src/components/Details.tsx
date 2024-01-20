import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { contactIcons } from "../data/data";

const Details = () => {
  return (
    <Stack direction="row" p="20px 200px">
      <Stack w="50%" gap={6}>
        <Box>
          <Text fontFamily="sans-serif" fontSize="5xl" fontWeight="bold">
            Hi,
          </Text>
          <Text fontFamily="sans-serif" fontSize="5xl" fontWeight="bold">
            I'm Emeka Akashili
          </Text>
        </Box>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize="xl"
          mb="50px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Stack direction="row" gap={5}>
          {contactIcons.map((icon, index) => (
            <Link
              key={index}
              _hover={{ color: "orange" }}
              href={icon.link}
              target={icon.link === "/contact" ? "_self" : "_blank"}
            >
              {icon.element}
            </Link>
          ))}
        </Stack>
      </Stack>
      <Flex alignItems="center" w="50%">
        <Image
          w="280px"
          h="280px"
          ml="auto"
          src="././avatar.png"
          alt="Avatar"
        />
      </Flex>
    </Stack>
  );
};

export default Details;
