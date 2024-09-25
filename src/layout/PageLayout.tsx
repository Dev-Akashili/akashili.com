import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      m={"auto"}
      minH="100vh"
      minW={"350px"}
      maxW={"800px"}
      w={{ base: "90%", md: "95vh", lg: "95vh" }}
    >
      <Navbar />
      {children}
    </Box>
  );
};

export default PageLayout;
