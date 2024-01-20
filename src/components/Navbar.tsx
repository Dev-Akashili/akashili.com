import { Flex, Stack, Text, Link, Box } from "@chakra-ui/react";
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
  return (
    <Flex minH="100px" alignItems="center">
      <Link
        ml="50px"
        fontSize="md"
        fontWeight="extrabold"
        fontFamily="sans-serif"
        _hover={{ textDecoration: "none" }}
        href="/"
      >
        Akashili.com
      </Link>
      <Stack direction="row" gap={3} ml="100px">
        {navlinks.map((navlink, index) => (
          <Box key={index}>
            <NavLink name={navlink.name} to={navlink.to} />
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export default Navbar;
