import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const inputStyle = {
  border: "1px solid"
};

const Contact = () => {
  const toast = useToast();
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { colorMode } = useColorMode();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_bcy2zny",
          "template_fkiwmrg",
          form.current,
          "CkfjlBXlL7vmevlMk"
        )
        .then(
          (result) => {
            console.log(result);
            if (result.text == "OK") {
              setIsSubmitting(false);
              toast({
                title: "Message successfully sent.",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true
              });
            }
            form.current?.reset();
          },
          (error) => {
            console.error(error);
            setIsSubmitting(false);
            toast({
              title: "Message not sent!.",
              description: "Something went wrong, please try again",
              status: "error",
              position: "top",
              duration: 5000,
              isClosable: true
            });
          }
        );
    }
  };

  return (
    <Stack mt={"20px"} gap={"10px"}>
      <Text
        fontSize={{ base: "35px", md: "40px", lg: "45px" }}
        fontWeight={"semibold"}
        textAlign={"center"}
      >
        Contact Me
      </Text>
      <Stack textAlign={"center"}>
        <Text> Fill out the form, and I'll get back to you shortly.</Text>
        <Text>
          Or send an email to{" "}
          <span>
            <a
              href="mailto:chukwuemeka.akashili@gmail.com"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                color: "#3182ce",
                cursor: "pointer"
              }}
            >
              chukwuemeka.akashili@gmail.com
            </a>
          </span>
        </Text>
      </Stack>
      <Box px={{ base: 0, md: "65px", lg: "55px" }}>
        <form onSubmit={handleSubmit} ref={form}>
          <Stack gap={"10px"}>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", lg: "md" }}>Name</FormLabel>
              <Input name="name" type="text" {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", lg: "md" }}>Email</FormLabel>
              <Input name="email" type="email" {...inputStyle} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={{ base: "sm", lg: "md" }}>Message</FormLabel>
              <Textarea name="message" {...inputStyle} rows={5} />
            </FormControl>
            <Button
              w={"100px"}
              isLoading={isSubmitting}
              color={colorMode === "dark" ? "black" : "white"}
              backgroundColor={colorMode === "dark" ? "white" : "black"}
              fontSize={{ base: "sm", lg: "md" }}
              _hover={{
                backgroundColor: "blue.500"
              }}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default Contact;
