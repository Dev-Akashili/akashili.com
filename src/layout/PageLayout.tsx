import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
};

export default PageLayout;
