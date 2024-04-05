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

const inputStyle = {
  borderBottom: "1px solid",
  variant: "flushed",
  color: "gray",
  fontFamily: "sans-serif",
  fontWeight: "thin",
  fontSize: { base: "md", md: "lg", lg: "xl" }
};

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
    <Stack
      direction={{ base: "column-reverse", md: "row", lg: "row" }}
      p={{ base: "20px 35px", md: "20px 80px", lg: "20px 200px" }}
      gap={{ base: 0, md: 5, lg: 0 }}
    >
      <Box
        w={{ base: "100%", md: "75%", lg: "50%" }}
        mt={5}
        textAlign={{ base: "center" }}
      >
        <form ref={form} onSubmit={handleSubmit}>
          <Stack w={{ base: "100%", lg: "80%" }} gap={{ base: 2, lg: 3 }}>
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
              <Textarea name="message" {...inputStyle} rows={3} />
            </FormControl>
            <Button
              isLoading={isSubmitting}
              backgroundColor="black"
              color="white"
              fontSize={{ base: "sm", lg: "md" }}
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
      <Stack
        w={{ base: "100%", md: "75%", lg: "50%" }}
        gap={{ base: 0, md: 2, lg: 0 }}
      >
        <Text
          fontFamily="sans-serif"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
        >
          Contact Me
        </Text>
        <Text
          color="gray"
          fontFamily="sans-serif"
          fontWeight="thin"
          lineHeight="1.8"
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
          mb="50px"
        >
          Got any project ideas, proposals, or job opportunities to discuss?
          Fill out the form, and I'll get back to you shortly.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Contact;
