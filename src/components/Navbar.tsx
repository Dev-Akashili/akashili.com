import { Flex, Stack, Text, Link } from "@chakra-ui/react";
import { navlinks } from "../data/data";

interface NavLinkProps {
  name: string;
  to: string;
}

const NavLink = ({ name, to }: NavLinkProps) => {
  return (
    <Link
      as="button"
      fontSize="xs"
      fontWeight="bold"
      transition="border-bottom 0.2s ease"
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
      <Text
        ml="50px"
        fontSize="md"
        fontWeight="extrabold"
        fontFamily="sans-serif"
      >
        Akashili.com
      </Text>
      <Stack direction="row" gap={3} ml="100px">
        {navlinks.map((navlink, index) => (
          <NavLink name={navlink.name} to={navlink.to} key={index} />
        ))}
      </Stack>
    </Flex>
  );
};

export default Navbar;
