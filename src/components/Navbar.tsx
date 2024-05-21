import {
  Flex,
  Stack,
  Link as ChakraLink,
  Box,
  useColorMode,
  Image,
  Text,
} from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { navlinks } from "../data/data";
import { Link } from "react-router-dom";

interface NavLinkProps {
  name: string;
  link: string;
}

const NavLink = ({ name, link }: NavLinkProps) => {
  return name === "RESUME" ? (
    <ChakraLink
      as="a"
      fontSize="xs"
      fontWeight="bold"
      _hover={{ borderBottom: "2px solid orange", color: "orange" }}
      href={link}
      target="_blank"
    >
      {name}
    </ChakraLink>
  ) : (
    <Link to={link}>
      <Text
        as="a"
        fontSize="xs"
        fontWeight="bold"
        _hover={{ borderBottom: "2px solid orange", color: "orange" }}
      >
        {name}
      </Text>
    </Link>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex minH="100px" alignItems="center">
      <Link to="/">
        <Text
          ml="50px"
          fontSize="md"
          fontWeight="extrabold"
          fontFamily="sans-serif"
          display={{ base: "none", md: "inline", lg: "inline" }}
        >
          Akashili.com
        </Text>
      </Link>
      <Box
        ml="30px"
        position="absolute"
        display={{ base: "inline", md: "none", lg: "none" }}
        alignItems="center"
      >
        <Link to="/">
          <Image src="././bolt.png" />
        </Link>
      </Box>
      <Stack direction="row" gap={3} ml="100px">
        {navlinks.map((navlink, index) => (
          <Box key={index}>
            <NavLink name={navlink.name} link={navlink.to} />
          </Box>
        ))}
      </Stack>
      <Box
        ml="50px"
        cursor="pointer"
        _hover={{ color: "orange" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <Moon height="18px" /> : <Sun />}
      </Box>
    </Flex>
  );
};

export default Navbar;
