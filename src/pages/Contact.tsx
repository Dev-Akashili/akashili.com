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
      <Box px={{ base: 0, md: "75px", lg: "75px" }}>
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
          </Stack>
          <Button
            w={"100%"}
            mt={10}
            isLoading={isSubmitting}
            color={colorMode === "dark" ? "black" : "white"}
            backgroundColor={colorMode === "dark" ? "white" : "black"}
            fontSize={{ base: "sm", lg: "md" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default Contact;
