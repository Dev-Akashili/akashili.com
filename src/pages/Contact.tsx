import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useToast
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const toast = useToast();
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
    <Stack direction="row" p="20px 200px">
      <Box w="50%" mt={5}>
        <form ref={form} onSubmit={handleSubmit}>
          <Stack w="80%" gap={3}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                borderBottom="1px solid"
                variant="flushed"
                name="name"
                type="text"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                borderBottom="1px solid"
                variant="flushed"
                name="email"
                type="text"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                borderBottom="1px solid"
                variant="flushed"
                name="message"
              />
            </FormControl>
            <Button
              isLoading={isSubmitting}
              backgroundColor="black"
              color="white"
              borderRadius={0}
              _hover={{
                backgroundColor: isSubmitting ? "black" : "orange",
                color: isSubmitting ? "white" : "black"
              }}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
      <Stack w="50%" gap={6}>
        <Text fontFamily="sans-serif" fontSize="5xl" fontWeight="bold">
          Contact Me
        </Text>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize="xl"
          mb="50px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Contact;
