// import {
//   Textarea,
//   FormLabel,
//   FormControl,
//   Button,
//   Box,
//   Input,
//   Center,
// } from "@chakra-ui/react";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

// const ContactForm = () => {
//   // Define the ref with the correct HTMLFormElement type
//   const form = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("myname");

//     if (form.current) {
//       emailjs
//         .sendForm(
//           "service_t2up4bn",
//           "template_3kxk84n",
//           form.current,
//           "rXBav9lDoqc7wwcwm" // Public key as a string
//         )
//         .then(
//           () => {
//             console.log("SUCCESS!");
//           },
//           (error) => {
//             console.log("FAILED...", error.text);
//           }
//         );
//     }
//   };

//   return (
//     <Center>
//       <Box
//         w={{ base: "300px", md: "250px", lg: "350px" }}
//         bg="white"
//         p="20px"
//         border="1px solid black"
//         mt="72px"
//         borderRadius="10px"
//         fontSize="sm"
//         boxShadow="md"
//       >
//         {/* Set the FormControl as a form */}
//         <FormControl as="form" ref={form} onSubmit={() => sendEmail}>
//           <FormLabel mb={0}>Full name</FormLabel>
//           <Input placeholder="Full name" type="text" name="user_name" />

//           <FormLabel mt={4} mb={0}>
//             Email
//           </FormLabel>
//           <Input placeholder="Email" type="email" name="user_email" />

//           <FormLabel mt={4} mb={0}>
//             Message
//           </FormLabel>
//           <Textarea placeholder="Type your message here..." name="message" />

//           <Button
//             type="submit"
//             w="full"
//             mt="20px"
//             bgColor="#a020f0"
//             color="white"
//           >
//             Submit
//           </Button>
//         </FormControl>
//       </Box>
//     </Center>
//   );
// };

// export default ContactForm;

import { Button, Box, Center } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <Center>
      <Box
        w={{ base: "300px", md: "250px", lg: "350px" }}
        bg="white"
        p="20px"
        border="1px solid white"
        mt="72px"
        borderRadius="10px"
        fontSize="sm"
        boxShadow="md"
      >
        {/* Set the FormControl as a form */}
        <Link to="https://form.jotform.com/250465358135559" target="_blank">
          <Button
            type="submit"
            w="full"
            mt="20px"
            bgColor="#a020f0"
            color="white"
          >
            Contact Us
          </Button>
        </Link>
      </Box>
    </Center>
  );
};

export default ContactForm;
