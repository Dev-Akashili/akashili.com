import { Box, Flex, Text } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="80vh">
      <Box textAlign="center" color="orange.400">
        <Text
          fontSize={{ sm: "5xl", md: "7xl", lg: "7xl" }}
          fontWeight="medium"
        >
          404
        </Text>
        <Text fontSize={{ sm: "lg", md: "xl", lg: "xl" }} fontWeight="semibold">
          Page Not Found
        </Text>
      </Box>
    </Flex>
  );
};

export default NotFound;
