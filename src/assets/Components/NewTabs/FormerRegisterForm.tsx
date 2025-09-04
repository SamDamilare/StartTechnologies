// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Text,
//   VStack,
//   useToast,
// } from "@chakra-ui/react";
// import { useState } from "react";
// // import RegisterButton from "./RegisterButton";
// // import PayDetails from "./PayDetails";

// import { Box } from "@chakra-ui/react"

// const RegisterForm = ({ onSuccess }: { onSuccess: () => void }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [amount, setAmount] = useState("");

//   const toast = useToast();

//   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;
//     setSelectedOption(value);

//     const priceMap: Record<string, string> = {
//       "UX Research": "N 70,000",
//       "Frontend Development": "N 100,000",
//       "Product Design": "N 100,000",
//     };
//     setAmount(priceMap[value] || "");
//   };
//   const handleSubmit = () => {
//     if (!fullName || !email || !selectedOption) {
//       toast({
//         title: "Error",
//         description: "Please fill in all required fields.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     } else {
//       toast({
//         title: "Registration Successful",
//         description: "You have successfully registered!",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       }),
//         onSuccess();
//       // (<PayDetails />);
//     }
//   };

//   return (
//     <div>
//       <Center>
//         <VStack fontFamily={"poppins"}>
//           <Text
//             fontWeight={500}
//             fontSize={"25px"}
//             w={{ base: "300px", md: "300px", lg: "400px" }}
//             textAlign={"center"}
//           >
//             Register for your Course Today
//           </Text>
//           <Text
//             fontSize={"12px"}
//             textAlign={"center"}
//             w={{ base: "300px", md: "300px", lg: "400px" }}
//           >
//             Input all your details and we will get back to you via your email.
//           </Text>
//           <Box
//             bgColor={"white"}
//             p="30px"
//             borderRadius={"15px"}
//             boxShadow={"100px black"}
//             w={{ base: "300px", md: "300px", lg: "400px" }}
//             mt={4}
//           >
//             <FormControl>
//               <FormLabel mb={0}>Full Name</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Full Name"
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//               <FormLabel mt={4} mb={0}>
//                 Email
//               </FormLabel>
//               <Input
//                 type="email"
//                 placeholder="example@email.com"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <FormLabel mt={4} mb={0}>
//                 Course of interest
//               </FormLabel>
//               <Select value={selectedOption} onChange={handleOptionChange}>
//                 <option value="">Select</option>
//                 <option value="UX Research">UX Research</option>
//                 <option value="Product Design">Product Design</option>
//                 <option value="Frontend Development">
//                   Frontend Development
//                 </option>

//                 <option value="" disabled>
//                   UI Design
//                 </option>
//                 <option value="" disabled>
//                   UX Design
//                 </option>
//                 <option value="" disabled>
//                   UI/UX Design
//                 </option>

//                 <option value="" disabled>
//                   Design Thinking
//                 </option>
//                 <option value="" disabled>
//                   Interaction Design
//                 </option>
//               </Select>
//               <FormLabel mt={4} mb={0}>
//                 Style of learning
//               </FormLabel>
//               <Select>
//                 <option value="">select</option>
//                 <option value="Virtual">Virtual</option>
//                 <option value="physical" disabled>
//                   Physical
//                 </option>
//               </Select>

//               <FormLabel mt={4} mb={0}>
//                 Price
//               </FormLabel>

//               <Input
//                 type="text"
//                 placeholder="Select A Course"
//                 value={amount}
//                 isReadOnly
//               />
//             </FormControl>

//             <Button
//               w="full"
//               mt={4}
//               bgColor={"#a020f0"}
//               color={"white"}
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//           </Box>
//         </VStack>
//       </Center>
//     </div>
//   );
// };

// export default RegisterForm;

// import {
//   Box,
//   Button,
//   Center,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   Text,
//   VStack,
//   useToast,
//   // Link as ChakraLink, // To avoid conflict with React Router Link
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { supabase } from "../../../Supabase-Client/supabase"; // Adjust path as needed
// import { usePaystackPayment } from "react-paystack"; // Ensure this is installed
// import { useNavigate } from "react-router-dom"; // If you're using React Router

// interface RegisterFormProps {
//   onSuccess: () => void; // Callback to trigger after successful registration AND payment
// }

// const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [amount, setAmount] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const toast = useToast();
//   const navigate = useNavigate(); // Hook for navigation

//   const priceMap: Record<string, number> = {
//     // Store amounts as numbers (kobo)
//     "UX Research": 70000,
//     "Frontend Development": 100000,
//     "Product Design": 100000,
//   };

//   const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const value = event.target.value;
//     setSelectedOption(value);
//     setAmount(
//       priceMap[value]?.toLocaleString("en-NG", {
//         style: "currency",
//         currency: "NGN",
//         minimumFractionDigits: 0,
//       }) || ""
//     );
//   };

//   const handlePaystackSuccess = async (reference: any) => {
//     console.log("Paystack payment successful:", reference);
//     setIsSubmitting(false);
//     toast({
//       title: "Payment Successful",
//       description: "Your registration and payment were successful!",
//       status: "success",
//       duration: 5000,
//       isClosable: true,
//     });
//     onSuccess(); // Trigger the callback passed from the modal
//   };

//   const handlePaystackClose = () => {
//     console.log("Paystack payment closed.");
//     setIsSubmitting(false);
//     toast({
//       title: "Payment Pending",
//       description:
//         "Your registration is complete, but payment was not finalized.",
//       status: "warning",
//       duration: 5000,
//       isClosable: true,
//     });
//     // You might want to update the user's status in Supabase to reflect pending payment
//   };

//   const initializePayment = usePaystackPayment({
//     reference: Math.random().toString(36).substring(7), // Unique transaction reference
//     email: email,
//     amount: priceMap[selectedOption] || 0, // Amount in kobo
//     publicKey:
//       process.env.REACT_APP_PAYSTACK_PUBLIC_KEY ||
//       "pk_test_ffedf6d2f2e8048c311481943a72379c52c45e6b", // Replace with your env variable
//     onSuccess: (reference) => handlePaystackSuccess(reference),
//     onClose: handlePaystackClose,
//   });

//   const handleSubmit = async () => {
//     if (!fullName || !email || !selectedOption) {
//       toast({
//         title: "Error",
//         description: "Please fill in all required fields.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     toast({
//       title: "Registering...",
//       description: "Submitting your registration details.",
//       status: "info",
//       duration: 0,
//       isClosable: false,
//     });

//     try {
//       const { data: registrationData, error: registrationError } =
//         await supabase.functions.invoke("register-user", {
//           // Call your Supabase function for registration
//           body: JSON.stringify({
//             fullName,
//             email,
//             selectedOption,
//             paymentStatus: "pending", // Initial status
//           }),
//         });

//       if (registrationError) {
//         console.error("Registration error:", registrationError);
//         toast({
//           title: "Registration Failed",
//           description:
//             registrationError.message ||
//             "Failed to register. Please try again.",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//         });
//         setIsSubmitting(false);
//       } else if (registrationData?.user_id) {
//         toast.closeAll();
//         console.log(
//           "User registered in Supabase with ID:",
//           registrationData.user_id
//         );
//         // Now initiate Paystack payment
//         initializePayment();
//       } else {
//         toast.closeAll();
//         toast({
//           title: "Registration Issue",
//           description:
//             "Registration was processed, but we encountered an issue. Please contact support.",
//           status: "warning",
//           duration: 5000,
//           isClosable: true,
//         });
//         setIsSubmitting(false);
//       }
//     } catch (error) {
//       console.error("Unexpected registration error:", error);
//       toast.closeAll();
//       toast({
//         title: "Error",
//         description: "An unexpected error occurred during registration.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//       });
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <Center>
//         <VStack fontFamily={"poppins"}>
//           <Text
//             fontWeight={500}
//             fontSize={"25px"}
//             w={{ base: "300px", md: "300px", lg: "400px" }}
//             textAlign={"center"}
//           >
//             Register for your Course Today
//           </Text>
//           <Text
//             fontSize={"12px"}
//             textAlign={"center"}
//             w={{ base: "300px", md: "300px", lg: "400px" }}
//           >
//             Input all your details and we will get back to you via your email.
//           </Text>
//           <Box
//             bgColor={"white"}
//             p="30px"
//             borderRadius={"15px"}
//             boxShadow={"md"} // Changed boxShadow for better appearance
//             w={{ base: "300px", md: "300px", lg: "400px" }}
//             mt={4}
//           >
//             <FormControl>
//               <FormLabel mb={1}>Full Name</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Full Name"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />

//               <FormLabel mt={4} mb={1}>
//                 Email
//               </FormLabel>
//               <Input
//                 type="email"
//                 placeholder="example@email.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <FormLabel mt={4} mb={1}>
//                 Course of interest
//               </FormLabel>
//               <Select value={selectedOption} onChange={handleOptionChange}>
//                 <option value="">Select</option>
//                 <option value="UX Research">UX Research</option>
//                 <option value="Product Design">Product Design</option>
//                 <option value="Frontend Development">
//                   Frontend Development
//                 </option>
//                 {/* Removed disabled options as they don't allow selection */}
//               </Select>

//               <FormLabel mt={4} mb={1}>
//                 Style of learning
//               </FormLabel>
//               <Select>
//                 <option value="">Select</option>
//                 <option value="Virtual">Virtual</option>
//                 <option value="physical" disabled>
//                   Physical (Currently Unavailable)
//                 </option>
//               </Select>

//               <FormLabel mt={4} mb={1}>
//                 Price
//               </FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Select A Course"
//                 value={amount}
//                 isReadOnly
//               />
//             </FormControl>

//             <Button
//               w="full"
//               mt={4}
//               bgColor={"#a020f0"}
//               color={"white"}
//               onClick={handleSubmit}
//               isLoading={isSubmitting}
//               loadingText="Submitting"
//               isDisabled={isSubmitting}
//             >
//               Submit and Pay
//             </Button>
//           </Box>
//         </VStack>
//       </Center>
//     </div>
//   );
// };

// export default RegisterForm;import { useEffect, useState } from "react";
