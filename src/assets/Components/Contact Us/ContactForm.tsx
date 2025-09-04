// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import {
//   Textarea,
//   FormLabel,
//   FormControl,
//   Button,
//   Box,
//   Input,
//   Center,
// } from "@chakra-ui/react";
// import { useToast } from "@/hooks/use-toast";
// import { supabase } from "../../../supabase";

// const contactFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters." }),
// });
// type ContactFormValues = z.infer<typeof contactFormSchema>;
// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   // Initialize form with default values
//   const form = useForm<ContactFormValues>({
//     resolver: zodResolver(contactFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   // Handle form submission
//   async function onSubmit(data: ContactFormValues) {
//     try {
//       setIsSubmitting(true);

//       // Insert data into Supabase 'contacts' table
//       const { error } = await supabase.from("contacts").insert([
//         {
//           name: data.name,
//           email: data.email,
//           message: data.message,
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) {
//         throw error;
//       }

//       // Show success message
//       toast({
//         title: "Message sent",
//         description: "Thank you for your message. We'll get back to you soon.",
//       });

//       // Reset form
//       form.reset();
//     } catch (error) {
//       console.error("Error submitting contact form:", error);
//       toast({
//         title: "Error",
//         description: "Failed to send your message. Please try again.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }
//   return (
//     <Center>
//       <Box
//         w={{ base: "300px", md: "250px", lg: "350px" }}
//         bg="white"
//         p="20px"
//         // border="1px solid black"
//         mt="72px"
//         borderRadius="10px"
//         fontSize="sm"
//         boxShadow="md"
//       >
//         {/* Set the FormControl as a form */}
//         <FormControl as="form">
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

// import { Button, Box, Center } from "@chakra-ui/react";

// import { Link } from "react-router-dom";

// const ContactForm = () => {
//   return (
//     <Center>
//       <Box
//         w={{ base: "300px", md: "250px", lg: "350px" }}
//         bg="white"
//         p="20px"
//         border="1px solid white"
//         mt="72px"
//         borderRadius="10px"
//         fontSize="sm"
//         boxShadow="md"
//       >
//         {/* Set the FormControl as a form */}
//         <Link to="https://form.jotform.com/250465358135559" target="_blank">
//           <Button
//             type="submit"
//             w="full"
//             mt="20px"
//             bgColor="#a020f0"
//             color="white"
//           >
//             Contact Us
//           </Button>
//         </Link>
//       </Box>
//     </Center>
//   );
// };

// export default ContactForm;

// "use client";
// "use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Textarea,
  FormLabel,
  FormControl,
  Button,
  Box,
  Input,
  Center,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import supabase from "../../../Supabase-Client/supabase";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast(); // Using Chakra UI's toast

  // Initialize form with default values
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: ContactFormValues) {
    try {
      setIsSubmitting(true);

      // Insert data into Supabase 'contacts' table
      const { error } = await supabase.from("ContactFormTest").insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        throw error;
      }

      // Show success message using Chakra UI toast
      toast({
        title: "Message sent",
        description: "Thank you for your message. We'll get back to you soon.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });

      // Reset form
      reset();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Center>
      <Box
        w={{ base: "300px", md: "250px", lg: "350px" }}
        bg="white"
        p="20px"
        mt="72px"
        borderRadius="10px"
        fontSize="sm"
        boxShadow="md"
      >
        {/* Connect the form to React Hook Form's handleSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name} mb={4}>
            <FormLabel mb={0}>Full name</FormLabel>
            <Input placeholder="Full name" {...register("name")} />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email} mb={4}>
            <FormLabel mb={0}>Email</FormLabel>
            <Input placeholder="Email" type="email" {...register("email")} />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.message} mb={4}>
            <FormLabel mb={0}>Message</FormLabel>
            <Textarea
              placeholder="Type your message here..."
              {...register("message")}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            w="full"
            mt="20px"
            bgColor="#a020f0"
            color="white"
            isLoading={isSubmitting}
            loadingText="Submitting"
            disabled={isSubmitting}
            _hover={{ bgColor: "#8a1cc7" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default ContactForm;
