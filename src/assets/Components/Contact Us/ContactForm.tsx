import {
  Textarea,
  FormLabel,
  FormControl,
  Button,
  Box,
  Input,
  Center,
} from "@chakra-ui/react";
// import React from "react";

const ContactForm = () => {
  return (
    <div>
      <Center>
        <Box
          w={{ base: "300px", md: "250px", lg: "350px" }}
          bg="white"
          p="20px"
          border={"black"}
          mt="72px"
          borderRadius={"10px"}
          fontSize={"sm"}
          boxShadow={"10px"}
        >
          <FormControl>
            <FormLabel mb={0}>Full name</FormLabel>
            <Input placeholder="Full name" type="text" />
            <FormLabel mb={0} mt={4}>
              Email
            </FormLabel>
            <Input placeholder="Email" type="text" />
            <FormLabel mb={0} mt={4}>
              Message
            </FormLabel>
            <Textarea placeholder="Type your message here..." />
            <Button bgColor="#a020f0" color="white" w="full" mt="20px">
              Submit
            </Button>
          </FormControl>
        </Box>
      </Center>
    </div>
  );
};

export default ContactForm;
