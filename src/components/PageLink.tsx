import { Flex, Link } from "@chakra-ui/react";

interface PageLayoutProps {
  icon: JSX.Element;
  text: string;
  link?: string;
}

const PageLink = ({ icon, text, link = "" }: PageLayoutProps) => {
  return (
    <Flex
      as={link ? Link : Flex}
      gap={"8px"}
      alignItems="center"
      borderBottom={"1px"}
      href={link ?? ""}
      target={"_blank"}
      _hover={{ color: "blue.500", cursor: "pointer", textDecoration: "none" }}
    >
      {icon}
      {text}
    </Flex>
  );
};

export default PageLink;
