import { Flex, Stack, Link, Box, useColorMode, Image } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { navlinks } from "../data/data";

interface NavLinkProps {
  name: string;
  to: string;
}

const NavLink = ({ name, to }: NavLinkProps) => {
  return (
    <Link
      as="a"
      fontSize="xs"
      fontWeight="bold"
      _hover={{ borderBottom: "2px solid orange", color: "orange" }}
      href={to}
      target={name === "RESUME" ? "_blank" : "_self"}
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex minH="100px" alignItems="center">
      <Link
        ml="50px"
        fontSize="md"
        fontWeight="extrabold"
        fontFamily="sans-serif"
        _hover={{ textDecoration: "none" }}
        href="/"
        display={{ base: "none", md: "inline", lg: "inline" }}
      >
        Akashili.com
      </Link>
      <Link
        ml="30px"
        position="absolute"
        display={{ base: "inline", md: "none", lg: "none" }}
        href="/"
        alignItems="center"
      >
        <Image src="././bolt.png" />
      </Link>
      <Stack direction="row" gap={3} ml="100px">
        {navlinks.map((navlink, index) => (
          <Box key={index}>
            <NavLink name={navlink.name} to={navlink.to} />
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
