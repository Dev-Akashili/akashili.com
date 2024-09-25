import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Contact from "./pages/Contact";
import Home from "./pages/IndexPage";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageLayout>
  );
};
