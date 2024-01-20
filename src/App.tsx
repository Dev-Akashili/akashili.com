import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </PageLayout>
  );
};
