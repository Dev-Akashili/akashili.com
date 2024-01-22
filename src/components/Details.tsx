import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";
import { contactIcons } from "../data/data";

const Details = () => {
  return (
    <Stack
      direction={{ sm: "column-reverse", md: "row", lg: "row" }}
      p={{ sm: "20px 50px", lg: "20px 200px" }}
      gap={{ sm: 6 }}
    >
      <Stack w="100%" gap={{ sm: 3, md: 6, lg: 6 }}>
        <Stack
          direction={{ sm: "row", md: "column", lg: "column" }}
          justifyContent={{ sm: "center" }}
        >
          <Text
            fontFamily="sans-serif"
            fontSize={{ sm: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
          >
            Hi,
          </Text>
          <Text
            fontFamily="sans-serif"
            fontSize={{ sm: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
          >
            I'm Emeka Akashili
          </Text>
        </Stack>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize={{ sm: "md", md: "lg", lg: "xl" }}
          mb="50px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
        <Stack
          direction="row"
          gap={5}
          justifyContent={{ sm: "center", md: "left", lg: "left" }}
        >
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
      <Flex alignItems="center" w="100%">
        <Image
          w={{ sm: "220px", md: "220px", lg: "280px" }}
          h={{ sm: "220px", md: "220px", lg: "280px" }}
          m={{ sm: "0 auto", lg: "0 0 0 auto" }}
          src="././avatar.png"
          alt="Avatar"
        />
      </Flex>
    </Stack>
  );
};

export default Details;
