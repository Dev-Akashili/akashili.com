import { Box, Flex, useColorMode, Button } from "@chakra-ui/react";
import { MoveLeft, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname.includes("contact");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      minH={{ base: "60px", md: "100px", lg: "100px" }}
      justifyContent={"space-between"}
    >
      {isContactPage ? (
        <Link to={"/"} style={{ marginTop: "auto" }}>
          <Button size={"sm"} variant={"ghost"} _hover={{ color: "blue.500" }}>
            <MoveLeft />
          </Button>
        </Link>
      ) : (
        <Box></Box>
      )}
      <Button
        size={"sm"}
        mt={"auto"}
        variant={"ghost"}
        _hover={{ color: "blue.500" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <Sun size={"24px"} /> : <Moon size={"24px"} />}
      </Button>
    </Flex>
  );
};

export default Navbar;
