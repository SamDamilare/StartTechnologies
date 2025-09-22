// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   course: z.string().min(1, { message: "Please select a course." }),
//   learning_mode: z
//     .string()
//     .min(1, { message: "Please select a learning mode." }),
//   price: z.string().min(1, { message: "Price must be selected." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const toast = useToast();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: "",
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse) {
//       const newPrice =
//         priceMap[selectedCourse]?.toLocaleString("en-NG", {
//           style: "currency",
//           currency: "NGN",
//           minimumFractionDigits: 0,
//         }) || "";
//       setValue("price", newPrice);
//     } else {
//       setValue("price", "");
//     }
//   }, [selectedCourse, setValue]);

//   async function onSubmit(data: RegisterFormValues) {
//     try {
//       setIsSubmitting(true);

//       const { error } = await supabase.from("RegistrationTest").insert([
//         {
//           name: data.name,
//           email: data.email,
//           course: data.course,
//           learning_mode: data.learning_mode,
//           price: data.price,
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) throw error;

//       toast({
//         title: "Registration successful",
//         description: "Redirecting to payment...",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       // ✅ Navigate to Paystack page with state
//       // navigate("/paystack", {
//       //   state: {
//       //     name: data.name,
//       //     email: data.email,
//       //     course: data.course,
//       //     learning_mode: data.learning_mode,
//       //   },
//       // });

//       navigate("/pay", {
//         state: {
//           name: data.name,
//           email: data.email,
//           course: data.course,
//           learning_mode: data.learning_mode,
//         },
//       });

//       reset();
//     } catch (error) {
//       toast({
//         title: "Submission failed",
//         description: "Please try again later.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <Box p={4}>
//       <Heading textAlign={"center"}>Register for your Course Today</Heading>
//       <Text textAlign={"center"} mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg={"white"} p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input
//               isReadOnly
//               {...register("price")}
//               placeholder="Select a course"
//             />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Submitting"
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { usePaystackPayment } from "react-paystack"; // Import Paystack hook
// import supabase from "../../../Supabase-Client/supabase"; // Adjust the path if necessary

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   course: z.string().min(1, { message: "Please select a course." }),
//   learning_mode: z
//     .string()
//     .min(1, { message: "Please select a learning mode." }),
//   price: z.string().min(1, { message: "Price must be selected." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const toast = useToast();

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     reset,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: "",
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse) {
//       const newPrice =
//         priceMap[selectedCourse]?.toLocaleString("en-NG", {
//           style: "currency",
//           currency: "NGN",
//           minimumFractionDigits: 0,
//         }) || "";
//       setValue("price", newPrice);
//     } else {
//       setValue("price", "");
//     }
//   }, [selectedCourse, setValue]);

//   // Paystack Configuration
//   const publicKey =
//     process.env.NEXT_PUBLIC_PAYSTACK_KEY ||
//     "Ypk_test_ffedf6d2f2e8048c311481943a72379c52c45e6b"; //  IMPORTANT:  Use env variable
//   const getPaystackConfig = (
//     email: string,
//     amount: number,
//     reference: string
//   ) => ({
//     reference: reference, //  Use the generated reference
//     email,
//     amount: amount * 100, // Amount in kobo
//     publicKey,
//   });

//   // Handle successful payment
//   const handlePaymentSuccess = async (response: any) => {
//     setIsSubmitting(true); // Keep submitting state during verification

//     try {
//       // 1.  Save registration and payment details to Supabase
//       const { error } = await supabase.from("RegistrationTest").insert([
//         {
//           name: response.name, // Get name from form data
//           email: response.email, // Get email from form data.
//           course: response.course, // Get course from form
//           learning_mode: response.learning_mode, //get learning mode
//           payment_reference: response.reference, // Get the reference from Paystack
//           payment_status: response.status, // "success" or other Paystack status
//           amount: priceMap[response.course] / 100, // Store in Naira
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) {
//         throw error;
//       }

//       // 2. Show success message
//       toast({
//         title: "Registration successful",
//         description:
//           "Your payment was successful and your registration is complete.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       // 3. Reset form
//       reset();
//     } catch (error: any) {
//       console.error("Error saving registration data:", error);
//       toast({
//         title: "Registration Error",
//         description:
//           "There was an error completing your registration. Please contact support.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handlePaymentClose = () => {
//     toast({
//       title: "Payment Cancelled",
//       description: "You cancelled the payment process.",
//       status: "info",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });
//     setIsSubmitting(false);
//   };

//   // Initialize Paystack
//   const initializePayment = usePaystackPayment({
//     reference: "",
//     email: "",
//     amount: 0,
//     publicKey: "",
//   });

//   async function onSubmit(data: RegisterFormValues) {
//     setIsSubmitting(true);
//     const paymentReference = `REG_${new Date().getTime()}_${Math.floor(
//       Math.random() * 1000
//     )}`;
//     const paymentConfig = getPaystackConfig(
//       data.email,
//       priceMap[data.course] / 100,
//       paymentReference
//     );

//     try {
//       initializePayment({
//         ...paymentConfig,
//         onSuccess: (response) => handlePaymentSuccess({ ...response, ...data }), // Pass form data
//         onClose: handlePaymentClose,
//       });
//     } catch (error) {
//       setIsSubmitting(false);
//       console.error("Paystack error", error);
//       toast({
//         title: "Payment Error",
//         description: "Could not initialize payment, please try again",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   }

//   return (
//     <Box p={4}>
//       <Heading textAlign={"center"}>Register for your Course Today</Heading>
//       <Text textAlign={"center"} mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg={"white"} p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input
//               isReadOnly
//               {...register("price")}
//               placeholder="Select a course"
//             />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Submitting..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   course: z.string().min(1, { message: "Please select a course." }),
//   learning_mode: z
//     .string()
//     .min(1, { message: "Please select a learning mode." }),
//   price: z.string().min(1, { message: "Price must be selected." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const toast = useToast();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: "",
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse) {
//       const newPrice =
//         priceMap[selectedCourse]?.toLocaleString("en-NG", {
//           style: "currency",
//           currency: "NGN",
//           minimumFractionDigits: 0,
//         }) || "";
//       setValue("price", newPrice);
//     } else {
//       setValue("price", "");
//     }
//   }, [selectedCourse, setValue]);

//   // Flutterwave Configuration
//   const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
//     tx_ref: Date.now(),
//     amount: priceMap[data.course],
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "070********",
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${data.learning_mode}`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   });

//   const config = getFlutterwaveConfig({
//     name: "",
//     email: "",
//     course: "",
//     learning_mode: "",
//     price: "",
//   });

//   const handleFlutterPayment = useFlutterwave(config);

//   // Handle successful payment
//   const handlePaymentSuccess = async (
//     response: any,
//     formData: RegisterFormValues
//   ) => {
//     setIsSubmitting(true);
//     try {
//       const { error } = await supabase.from("RegistrationTest").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           course: formData.course,
//           learning_mode: formData.learning_mode,
//           payment_reference: response.tx_ref,
//           payment_status: response.status,
//           amount: priceMap[formData.course],
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) {
//         throw error;
//       }

//       toast({
//         title: "Registration successful",
//         description:
//           "Your payment was successful and your registration is complete.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       reset();
//     } catch (error: any) {
//       console.error("Error saving registration data:", error);
//       toast({
//         title: "Registration Error",
//         description:
//           "There was an error completing your registration. Please contact support.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handlePaymentClose = () => {
//     toast({
//       title: "Payment Cancelled",
//       description: "You cancelled the payment process.",
//       status: "info",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });
//     setIsSubmitting(false);
//   };

//   async function onSubmit(data: RegisterFormValues) {
//     setIsSubmitting(true);

//     const flutterwaveConfig = getFlutterwaveConfig(data);

//     try {
//       handleFlutterPayment({
//         ...flutterwaveConfig,
//         callback: (response) => {
//           console.log(response);
//           if (response.status === "successful") {
//             handlePaymentSuccess(response, data);
//           }
//           closePaymentModal();
//         },
//         onClose: handlePaymentClose,
//       });
//     } catch (error) {
//       setIsSubmitting(false);
//       console.error("Flutterwave error", error);
//       toast({
//         title: "Payment Error",
//         description: "Could not initialize payment, please try again",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   }

//   return (
//     <Box p={4}>
//       <Heading textAlign={"center"}>Register for your Course Today</Heading>
//       <Text textAlign={"center"} mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg={"white"} p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input
//               isReadOnly
//               {...register("price")}
//               placeholder="Select a course"
//             />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// RegisterForm.tsx

// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   course: z.string().min(1, { message: "Please select a course." }),
//   learning_mode: z
//     .string()
//     .min(1, { message: "Please select a learning mode." }),
//   price: z.number().min(1, { message: "Invalid price." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const toast = useToast();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: 0,
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse && priceMap[selectedCourse]) {
//       setValue("price", priceMap[selectedCourse]);
//     } else {
//       setValue("price", 0);
//     }
//   }, [selectedCourse, setValue]);

//   const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
//     tx_ref: `REG_${Date.now()}`,
//     amount: data.price,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "07000000000",
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${data.learning_mode}`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   });

//   const handlePaymentSuccess = async (
//     response: any,
//     formData: RegisterFormValues
//   ) => {
//     try {
//       const { error } = await supabase.from("RegistrationTest").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           course: formData.course,
//           learning_mode: formData.learning_mode,
//           payment_reference: response.tx_ref,
//           payment_status: response.status,
//           amount: formData.price,
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) throw error;

//       toast({
//         title: "Registration successful",
//         description:
//           "Your payment was successful and your registration is complete.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       reset();
//     } catch (error: any) {
//       console.error("Error saving registration data:", error);
//       toast({
//         title: "Registration Error",
//         description: "There was an error completing your registration.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handlePaymentClose = () => {
//     toast({
//       title: "Payment Cancelled",
//       description: "You cancelled the payment process.",
//       status: "info",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });
//     setIsSubmitting(false);
//   };

//   async function onSubmit(data: RegisterFormValues) {
//     setIsSubmitting(true);

//     const flutterwaveConfig = getFlutterwaveConfig(data);
//     const initiateFlutterwave = useFlutterwave(flutterwaveConfig);

//     try {
//       initiateFlutterwave({
//         callback: (response) => {
//           if (response.status === "successful") {
//             handlePaymentSuccess(response, data);
//           }
//           closePaymentModal();
//         },
//         onClose: handlePaymentClose,
//       });
//     } catch (error) {
//       console.error("Flutterwave error:", error);
//       toast({
//         title: "Payment Error",
//         description: "Could not initialize payment.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       setIsSubmitting(false);
//     }
//   }

//   return (
//     <Box p={4}>
//       <Heading textAlign="center">Register for your Course Today</Heading>
//       <Text textAlign="center" mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg="white" p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input isReadOnly value={`₦${watch("price")}`} />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   course: z.string().min(1, { message: "Please select a course." }),
//   learning_mode: z
//     .string()
//     .min(1, { message: "Please select a learning mode." }),
//   price: z.number().min(1, { message: "Invalid price." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<RegisterFormValues | null>(null);
//   const toast = useToast();
//   // const navigate = useNavigate(); // Uncomment if you want to redirect

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: 0,
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse && priceMap[selectedCourse]) {
//       setValue("price", priceMap[selectedCourse]);
//     } else {
//       setValue("price", 0);
//     }
//   }, [selectedCourse, setValue]);

//   const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY,
//     tx_ref: `REG_${Date.now()}`,
//     amount: data.price,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "07000000000", // optional
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${data.learning_mode}`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   });

//   const initiateFlutterwave = useFlutterwave(
//     formData ? getFlutterwaveConfig(formData) : ({} as any)
//   );

//   const handlePaymentSuccess = async (
//     response: any,
//     formData: RegisterFormValues
//   ) => {
//     try {
//       const { error } = await supabase.from("RegistrationTest").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           course: formData.course,
//           learning_mode: formData.learning_mode,
//           payment_reference: response.tx_ref,
//           payment_status: response.status,
//           amount: formData.price,
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) throw error;

//       toast({
//         title: "Registration successful",
//         description:
//           "Your payment was successful and your registration is complete.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       reset();
//       // navigate("/success"); // Optional: redirect on success
//     } catch (error: any) {
//       console.error("Error saving registration data:", error);
//       toast({
//         title: "Registration Error",
//         description: "There was an error completing your registration.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//       setFormData(null);
//     }
//   };

//   const handlePaymentClose = () => {
//     toast({
//       title: "Payment Cancelled",
//       description: "You cancelled the payment process.",
//       status: "info",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });
//     setIsSubmitting(false);
//     setFormData(null);
//   };

//   useEffect(() => {
//     if (!formData) return;

//     initiateFlutterwave({
//       callback: (response) => {
//         if (response.status === "successful") {
//           handlePaymentSuccess(response, formData);
//         } else {
//           toast({
//             title: "Payment Failed",
//             description: "Transaction was not successful.",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//           setIsSubmitting(false);
//         }
//         closePaymentModal();
//       },
//       onClose: handlePaymentClose,
//     });
//   }, [formData]);

//   const onSubmit = (data: RegisterFormValues) => {
//     setIsSubmitting(true);
//     setFormData(data);
//   };

//   return (
//     <Box p={4}>
//       <Heading textAlign="center">Register for your Course Today</Heading>
//       <Text textAlign="center" mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg="white" p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input isReadOnly value={`₦${watch("price")}`} />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// // "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Enter a valid email address." }),
//   course: z.string().min(1, { message: "Select a course." }),
//   learning_mode: z.string().min(1, { message: "Select a learning mode." }),
//   price: z.number().min(1, { message: "Invalid price." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// type FlutterwaveResponse = {
//   status: string;
//   tx_ref: string;
//   transaction_id?: number;
// };

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<RegisterFormValues | null>(null);
//   const toast = useToast();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: 0,
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse && priceMap[selectedCourse]) {
//       setValue("price", priceMap[selectedCourse]);
//     } else {
//       setValue("price", 0);
//     }
//   }, [selectedCourse, setValue]);

//   const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY!,
//     tx_ref: `REG_${Date.now()}`,
//     amount: data.price,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "07000000000",
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${data.learning_mode}`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   });

//   const initiateFlutterwave = useFlutterwave(
//     formData ? getFlutterwaveConfig(formData) : ({} as any)
//   );

//   const verifyTransaction = async (transaction_id: number) => {
//     const response = await fetch(
//       `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_FLW_SECRET_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to verify transaction.");
//     }

//     const result = await response.json();
//     return result;
//   };

//   const handlePaymentSuccess = async (
//     response: FlutterwaveResponse,
//     formData: RegisterFormValues
//   ) => {
//     try {
//       if (!response.transaction_id) {
//         throw new Error("Missing transaction ID.");
//       }

//       const verification = await verifyTransaction(response.transaction_id);
//       const verifiedData = verification.data;

//       if (verifiedData.status !== "successful") {
//         throw new Error("Transaction verification failed.");
//       }

//       const { error } = await supabase.from("RegistrationForm").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           course: formData.course,
//           learning_mode: formData.learning_mode,
//           amount: formData.price,
//           payment_reference: verifiedData.tx_ref,
//           payment_status: verifiedData.status,
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) throw new Error(error.message);

//       toast({
//         title: "Registration Successful",
//         description: "Your payment was successful and recorded.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       reset();
//     } catch (error: any) {
//       console.error("❌ Verification/Insert Error:", error.message);
//       toast({
//         title: "Error",
//         description: error.message || "An error occurred.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//       setFormData(null);
//     }
//   };

//   const handlePaymentClose = () => {
//     toast({
//       title: "Payment Cancelled",
//       description: "You cancelled the payment process.",
//       status: "info",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });
//     setIsSubmitting(false);
//     setFormData(null);
//   };

//   // useEffect(() => {
//   //   if (!formData) return;

//   //   initiateFlutterwave({
//   //     callback: (response: FlutterwaveResponse) => {
//   //       if (response.status === "successful") {
//   //         handlePaymentSuccess(response, formData);
//   //       } else {
//   //         toast({
//   //           title: "Payment Failed",
//   //           description: "Transaction was not successful.",
//   //           status: "error",
//   //           duration: 5000,
//   //           isClosable: true,
//   //           position: "top",
//   //         });
//   //       }
//   //       closePaymentModal();
//   //       setIsSubmitting(false);
//   //       setFormData(null);
//   //     },
//   //     onClose: handlePaymentClose,
//   //   });
//   // }, [formData]);

//   useEffect(() => {
//     if (!formData) return;

//     initiateFlutterwave({
//       callback: (response: FlutterwaveResponse) => {
//         console.log("🧾 Callback Response:", response);

//         if (response && response.status === "successful" && response.tx_ref) {
//           handlePaymentSuccess(response, formData);
//         } else {
//           toast({
//             title: "Payment Failed",
//             description: "Transaction was not successful.",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         }

//         closePaymentModal();
//         setIsSubmitting(false);
//         setFormData(null);
//       },
//       onClose: handlePaymentClose,
//     });
//   }, [formData]);

//   const onSubmit = (data: RegisterFormValues) => {
//     setIsSubmitting(true);
//     setFormData(data);
//   };

//   return (
//     <Box p={4}>
//       <Heading textAlign="center">Register for your Course Today</Heading>
//       <Text textAlign="center" mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg="white" p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input isReadOnly value={`₦${watch("price")}`} />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Enter a valid email address." }),
//   course: z.string().min(1, { message: "Select a course." }),
//   learning_mode: z.string().min(1, { message: "Select a learning mode." }),
//   amount: z.number().min(1, { message: "Invalid price." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// type FlutterwaveResponse = {
//   status: string;
//   tx_ref: string;
//   transaction_id?: number;
//   flw_ref?: string;
// };

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<RegisterFormValues | null>(null);
//   const toast = useToast();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       amount: 0,
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse && priceMap[selectedCourse]) {
//       setValue("amount", priceMap[selectedCourse]);
//     } else {
//       setValue("amount", 0);
//     }
//   }, [selectedCourse, setValue]);

//   const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY!,
//     tx_ref: `REG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//     amount: data.amount,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "07000000000",
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${data.learning_mode}`,
//       logo: "https://res.cloudinary.com/dktrwqio1/image/upload/v1729855347/NYRadio/Colored_Logo__2_-removebg-preview_tppkrv.png",
//     },
//   });

//   const initiateFlutterwave = useFlutterwave(
//     formData ? getFlutterwaveConfig(formData) : ({} as any)
//   );

//   useEffect(() => {
//     if (!formData) return;

//     console.log("🚀 Starting payment for:", formData);

//     initiateFlutterwave({
//       callback: async (response: FlutterwaveResponse) => {
//         console.log("Payment response:", response);

//         closePaymentModal();

//         if (
//           response.status === "successful" &&
//           response.tx_ref &&
//           response.transaction_id
//         ) {
//           try {
//             // const { error } = await supabase
//             //   .from("New_User_Registration")
//             //   .insert([
//             //     {
//             //       name: formData.name,
//             //       email: formData.email,
//             //       course: formData.course,
//             //       learning_mode: formData.learning_mode,
//             //       amount: formData.price.toString(),
//             //       payment_reference: response.tx_ref,
//             //       payment_status: response.status,
//             //       transaction_id: response.transaction_id,
//             //       created_at: new Date().toISOString(),
//             //     },
//             //   ]);

//             // if (error) {
//             //   console.error("Database error:", error);

//             const { error, data } = await supabase
//               .from("New_User_Registration")
//               .insert([
//                 {
//                   name: formData.name,
//                   email: formData.email,
//                   course: formData.course,
//                   learning_mode: formData.learning_mode,
//                   amount: formData.amount.toString(),
//                   payment_reference: response.tx_ref ?? "MISSING_TX_REF",
//                   payment_status: response.status ?? "unknown",
//                   transaction_id: response.transaction_id ?? null,
//                   created_at: new Date().toISOString(),
//                 },
//               ])
//               .select(); // force Supabase to return any inserted rows for clarity

//             if (error) {
//               console.error(
//                 "Supabase Insert Error:",
//                 error.message,
//                 error.details,
//                 error.hint
//               );
//               toast({
//                 title: "Database Error",
//                 description:
//                   "Payment went through but saving registration failed. Please contact support.",
//                 status: "warning",
//                 duration: 5000,
//                 isClosable: true,
//                 position: "top",
//               });
//             } else {
//               toast({
//                 title: "Registration Complete ✅",
//                 description: "Your payment and registration were successful!",
//                 status: "success",
//                 duration: 5000,
//                 isClosable: true,
//                 position: "top",
//               });
//               reset();
//             }
//           } catch (err: any) {
//             console.error("Unexpected error:", err.message);
//             toast({
//               title: "Unexpected Error",
//               description: "Something went wrong. Please try again later.",
//               status: "error",
//               duration: 5000,
//               isClosable: true,
//               position: "top",
//             });
//           }
//         } else {
//           toast({
//             title: "Payment Failed ❌",
//             description: "Payment did not go through or was cancelled.",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         }

//         setIsSubmitting(false);
//         setFormData(null);
//       },

//       onClose: () => {
//         toast({
//           title: "Payment Cancelled",
//           description: "You closed the payment modal.",
//           status: "info",
//           duration: 3000,
//           isClosable: true,
//           position: "top",
//         });
//         setIsSubmitting(false);
//         setFormData(null);
//       },
//     });
//   }, [formData]);

//   const onSubmit = (data: RegisterFormValues) => {
//     console.log("📝 Form submitted with data:", data);

//     // Validate price
//     if (data.amount <= 0) {
//       toast({
//         title: "Invalid Price",
//         description: "Please select a course to see the price.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     // Validate environment variables
//     if (!import.meta.env.VITE_FLW_PUBLIC_KEY) {
//       toast({
//         title: "Configuration Error",
//         description: "Payment gateway not configured. Please contact support.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setFormData(data);
//   };

//   return (
//     <Box p={4}>
//       <Heading textAlign="center">Register for your Course Today</Heading>
//       <Text textAlign="center" mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg="white" p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.amount}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input isReadOnly value={`₦${watch("amount").toLocaleString()}`} />
//             <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// const RegistrationForm = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Enter a valid email address." }),
//   course: z.string().min(1, { message: "Select a course." }),
//   learning_mode: z.string().min(1, { message: "Select a learning mode." }),
//   price: z.number().min(1, { message: "Invalid price." }),
// });

// type RegistrationFormValues = z.infer<typeof RegistrationForm>;

// type FlutterwaveResponse = {
//   status: string;
//   tx_ref: string;
//   transaction_id?: number;
// };

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<RegistrationFormValues | null>(null);
//   const toast = useToast();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegistrationFormValues>({
//     resolver: zodResolver(RegistrationForm),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       price: 0,
//     },
//   });

//   const selectedCourse = watch("course");

//   useEffect(() => {
//     if (selectedCourse && priceMap[selectedCourse]) {
//       setValue("price", priceMap[selectedCourse]);
//     } else {
//       setValue("price", 0);
//     }
//   }, [selectedCourse, setValue]);

//   const getFlutterwaveConfig = (data: RegistrationFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY!,
//     tx_ref: `REG_${Date.now()}`,
//     amount: data.price,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "07000000000",
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${data.learning_mode}`,
//       logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
//     },
//   });

//   const initiateFlutterwave = useFlutterwave(
//     formData ? getFlutterwaveConfig(formData) : ({} as any)
//   );

//   const handlePaymentSuccess = async (
//     response: FlutterwaveResponse,
//     formData: RegistrationFormValues
//   ) => {
//     try {
//       const { error } = await supabase.from("RegistrationTest").insert([
//         {
//           name: formData.name,
//           email: formData.email,
//           course: formData.course,
//           learning_mode: formData.learning_mode,
//           amount: formData.price,
//           payment_reference: response.tx_ref,
//           payment_status: response.status,
//           created_at: new Date().toISOString(),
//         },
//       ]);

//       if (error) throw error;

//       toast({
//         title: "Registration successful",
//         description:
//           "Your payment was successful and your registration is complete.",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });

//       reset();
//     } catch (error: any) {
//       console.error("Registration error:", error);
//       toast({
//         title: "Registration Error",
//         description: "Something went wrong while saving your data.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//     } finally {
//       setIsSubmitting(false);
//       setFormData(null);
//     }
//   };

//   const handlePaymentClose = () => {
//     toast({
//       title: "Payment Cancelled",
//       description: "You cancelled the payment process.",
//       status: "info",
//       duration: 5000,
//       isClosable: true,
//       position: "top",
//     });
//     setIsSubmitting(false);
//     setFormData(null);
//   };

//   useEffect(() => {
//     if (!formData) return;

//     initiateFlutterwave({
//       callback: (response: FlutterwaveResponse) => {
//         if (response.status === "successful") {
//           handlePaymentSuccess(response, formData);
//         } else {
//           toast({
//             title: "Payment Failed",
//             description: "Transaction was not successful.",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         }
//         closePaymentModal();
//         setIsSubmitting(false);
//         setFormData(null);
//       },
//       onClose: handlePaymentClose,
//     });
//   }, [formData]);

//   const onSubmit = (data: RegistrationFormValues) => {
//     setIsSubmitting(true);
//     setFormData(data);
//   };

//   return (
//     <Box p={4}>
//       <Heading textAlign="center">Register for your Course Today</Heading>
//       <Text textAlign="center" mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg="white" p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.price}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input isReadOnly value={`₦${watch("price")}`} />
//             <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import * as z from "zod";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Select,
//   Input,
//   Heading,
//   Text,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
// import supabase from "../../../Supabase-Client/supabase";

// // Map of courses to their prices
// const priceMap: Record<string, number> = {
//   "UX Research": 70000,
//   "Frontend Development": 100000,
//   "Product Design": 100000,
// };

// // Zod schema for form validation
// const RegisterFormSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   email: z.string().email({ message: "Enter a valid email address." }),
//   course: z.string().min(1, { message: "Select a course." }),
//   learning_mode: z.string().min(1, { message: "Select a learning mode." }),
//   amount: z.number().min(1, { message: "Invalid price." }),
// });

// type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// // Type definition for Flutterwave response
// type FlutterwaveResponse = {
//   status: string;
//   tx_ref: string;
//   transaction_id?: number;
//   flw_ref?: string;
// };

// const RegisterForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<RegisterFormValues | null>(null);
//   const toast = useToast();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     watch,
//     setValue,
//     formState: { errors },
//   } = useForm<RegisterFormValues>({
//     resolver: zodResolver(RegisterFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       course: "",
//       learning_mode: "",
//       amount: 0,
//     },
//   });

//   const selectedCourse = watch("course");

//   // Update the amount field when a course is selected
//   useEffect(() => {
//     if (selectedCourse && priceMap[selectedCourse]) {
//       setValue("amount", priceMap[selectedCourse]);
//     } else {
//       setValue("amount", 0);
//     }
//   }, [selectedCourse, setValue]);

//   // Configuration for Flutterwave payment
//   // const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//   //   public_key: import.meta.env.VITE_FLW_PUBLIC_KEY!,
//   //   tx_ref: `REG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//   //   amount: data.amount,
//   //   currency: "NGN",
//   //   payment_options: "card,mobilemoney,ussd",
//   //   customer: {
//   //     email: data.email,
//   //     phone_number: "07000000000",
//   //     name: data.name,
//   //   },
//   //   customizations: {
//   //     title: "Course Registration Payment",
//   //     description: `Payment for ${data.course} - ${data.learning_mode}`,
//   //     logo: "https://res.cloudinary.com/dktrwqio1/image/upload/v1729855347/NYRadio/Colored_Logo__2_-removebg-preview_tppkrv.png",
//   //   },
//   // });

//   const getFlutterwaveConfig = (data: RegisterFormValues) => ({
//     public_key: import.meta.env.VITE_FLW_PUBLIC_KEY!,
//     tx_ref: `REG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
//     amount: data.amount,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     customer: {
//       email: data.email,
//       phone_number: "07000000000",
//       name: data.name,
//     },
//     customizations: {
//       title: "Course Registration Payment",
//       description: `Payment for ${data.course} - ${
//         data.learning_mode
//       }\n\nCourse Fee: ₦${priceMap[
//         data.course
//       ].toLocaleString()}\nMerchant Fee: ₦${
//         priceMap[data.course] < 100000 ? 1030 : 2200
//       }\nTotal: ₦${data.amount.toLocaleString()}`,
//       logo: "https://res.cloudinary.com/dktrwqio1/image/upload/v1729855347/NYRadio/Colored_Logo__2_-removebg-preview_tppkrv.png",
//     },
//   });

//   const initiateFlutterwave = useFlutterwave(
//     formData ? getFlutterwaveConfig(formData) : ({} as any)
//   );

//   useEffect(() => {
//     if (!formData) return;

//     console.log("🚀 Starting payment for:", formData);

//     initiateFlutterwave({
//       callback: async (response: FlutterwaveResponse) => {
//         console.log("Payment response:", response);

//         closePaymentModal();

//         if (
//           response.status === "successful" &&
//           response.tx_ref &&
//           response.transaction_id
//         ) {
//           try {
//             // FIX: The amount is now passed as a number, not a string.
//             // This prevents a data type mismatch error on the Supabase side.
//             const { error, data } = await supabase
//               .from("New_User_Registration")
//               .insert([
//                 {
//                   name: formData.name,
//                   email: formData.email,
//                   course: formData.course,
//                   learning_mode: formData.learning_mode,
//                   amount: formData.amount, // Changed from formData.amount.toString()
//                   tx_ref: response.tx_ref,
//                   status: response.status,
//                   transaction_id: response.transaction_id,
//                   Date: new Date().toISOString(),
//                 },
//               ])
//               .select();

//             if (error) {
//               console.error(
//                 "Supabase Insert Error:",
//                 error.message,
//                 error.details,
//                 error.hint
//               );
//               toast({
//                 title: "Database Error",
//                 description:
//                   "Payment went through but saving registration failed. Please check the console for details.",
//                 status: "warning",
//                 duration: 5000,
//                 isClosable: true,
//                 position: "top",
//               });
//             } else {
//               console.log("Supabase insert successful:", data);
//               toast({
//                 title: "Registration Complete ✅",
//                 description: "Your payment and registration were successful!",
//                 status: "success",
//                 duration: 5000,
//                 isClosable: true,
//                 position: "top",
//               });
//               reset();
//             }
//           } catch (err: any) {
//             console.error("Unexpected error:", err.message);
//             toast({
//               title: "Unexpected Error",
//               description: "Something went wrong. Please try again later.",
//               status: "error",
//               duration: 5000,
//               isClosable: true,
//               position: "top",
//             });
//           }
//         } else {
//           toast({
//             title: "Payment Failed ❌",
//             description: "Payment did not go through or was cancelled.",
//             status: "error",
//             duration: 5000,
//             isClosable: true,
//             position: "top",
//           });
//         }

//         setIsSubmitting(false);
//         setFormData(null);
//       },

//       onClose: () => {
//         toast({
//           title: "Payment Cancelled",
//           description: "You closed the payment modal.",
//           status: "info",
//           duration: 3000,
//           isClosable: true,
//           position: "top",
//         });
//         setIsSubmitting(false);
//         setFormData(null);
//       },
//     });
//   }, [formData]);

//   const onSubmit = (data: RegisterFormValues) => {
//     console.log("📝 Form submitted with data:", data);

//     if (data.amount <= 0) {
//       toast({
//         title: "Invalid Price",
//         description: "Please select a course to see the price.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     if (!import.meta.env.VITE_FLW_PUBLIC_KEY) {
//       toast({
//         title: "Configuration Error",
//         description: "Payment gateway not configured. Please contact support.",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     setIsSubmitting(true);
//     setFormData(data);
//   };

//   return (
//     <Box p={4}>
//       <Heading textAlign="center">Register for your Course Today</Heading>
//       <Text textAlign="center" mb={4}>
//         Input all your details and we will get back to you via email.
//       </Text>
//       <Box bg="white" p={4} borderRadius={10}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl isInvalid={!!errors.name}>
//             <FormLabel>Full Name</FormLabel>
//             <Input placeholder="Full Name" {...register("name")} />
//             <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.email}>
//             <FormLabel mt={4}>Email</FormLabel>
//             <Input
//               type="email"
//               placeholder="you@example.com"
//               {...register("email")}
//             />
//             <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.course}>
//             <FormLabel mt={4}>Course</FormLabel>
//             <Select placeholder="Select" {...register("course")}>
//               <option value="UX Research">UX Research</option>
//               <option value="Product Design">Product Design</option>
//               <option value="Frontend Development">Frontend Development</option>
//             </Select>
//             <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.learning_mode}>
//             <FormLabel mt={4}>Learning Mode</FormLabel>
//             <Select placeholder="Select" {...register("learning_mode")}>
//               <option value="Virtual">Virtual</option>
//               <option value="Physical" disabled>
//                 Physical (Unavailable)
//               </option>
//             </Select>
//             <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
//           </FormControl>

//           <FormControl isInvalid={!!errors.amount}>
//             <FormLabel mt={4}>Price</FormLabel>
//             <Input isReadOnly value={`₦${watch("amount").toLocaleString()}`} />
//             <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
//           </FormControl>

//           <Button
//             type="submit"
//             mt={6}
//             w="full"
//             bg="#a020f0"
//             color="white"
//             isLoading={isSubmitting}
//             loadingText="Processing..."
//           >
//             Submit and Pay
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default RegisterForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as z from "zod";
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Input,
  Heading,
  Text,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import supabase from "../../../Supabase-Client/supabase";

// Normal course prices (no fees)
const priceMap: Record<string, number> = {
  "UX Research": 70000,
  "Frontend Development": 100000,
  "Product Design": 100000,
};

// Helper: Add merchant fee
const calculateTotalWithFee = (baseAmount: number): number => {
  if (baseAmount === 0) return 0;
  return baseAmount < 100000 ? baseAmount + 1030 : baseAmount + 2200;
};

// Form validation
const RegisterFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Enter a valid email address." }),
  course: z.string().min(1, { message: "Select a course." }),
  learning_mode: z.string().min(1, { message: "Select a learning mode." }),
  amount: z.number().min(1, { message: "Invalid price." }), // this is ONLY base price
});

type RegisterFormValues = z.infer<typeof RegisterFormSchema>;

// Flutterwave response type
type FlutterwaveResponse = {
  status: string;
  tx_ref: string;
  transaction_id?: number;
  flw_ref?: string;
};

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RegisterFormValues | null>(null);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      course: "",
      learning_mode: "",
      amount: 0, // normal price only
    },
  });

  const selectedCourse = watch("course");

  // Update base price when course changes
  useEffect(() => {
    if (selectedCourse && priceMap[selectedCourse]) {
      setValue("amount", priceMap[selectedCourse]);
    } else {
      setValue("amount", 0);
    }
  }, [selectedCourse, setValue]);

  // Flutterwave config → use total (base + fee)
  const getFlutterwaveConfig = (data: RegisterFormValues) => {
    const totalWithFee = calculateTotalWithFee(data.amount);

    return {
      public_key: import.meta.env.VITE_FLW_PUBLIC_KEY!,
      tx_ref: `REG_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: totalWithFee, // ✅ send base + fee to Flutterwave
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: data.email,
        phone_number: "07000000000",
        name: data.name,
      },
      customizations: {
        title: "Course Registration Payment",
        description: `Payment for ${data.course} - ${data.learning_mode}`,
        logo: "https://res.cloudinary.com/dktrwqio1/image/upload/v1729855347/NYRadio/Colored_Logo__2_-removebg-preview_tppkrv.png",
      },
    };
  };

  const initiateFlutterwave = useFlutterwave(
    formData ? getFlutterwaveConfig(formData) : ({} as any)
  );

  // Handle Flutterwave flow
  useEffect(() => {
    if (!formData) return;

    const totalWithFee = calculateTotalWithFee(formData.amount);

    initiateFlutterwave({
      callback: async (response: FlutterwaveResponse) => {
        closePaymentModal();

        if (
          response.status === "successful" &&
          response.tx_ref &&
          response.transaction_id
        ) {
          try {
            const { error } = await supabase
              .from("New_User_Registration")
              .insert([
                {
                  name: formData.name,
                  email: formData.email,
                  course: formData.course,
                  learning_mode: formData.learning_mode,
                  amount: totalWithFee, // ✅ store total (base + fee)
                  tx_ref: response.tx_ref,
                  status: response.status,
                  transaction_id: response.transaction_id,
                  Date: new Date().toISOString(),
                },
              ]);

            if (error) throw error;

            toast({
              title: "Registration Complete ✅",
              description: "Your payment and registration were successful!",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
            reset();
          } catch (err: any) {
            console.error("Supabase error:", err.message);
            toast({
              title: "Database Error",
              description: "Payment went through but saving failed.",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "top",
            });
          }
        } else {
          toast({
            title: "Payment Failed ❌",
            description: "Payment did not go through or was cancelled.",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }

        setIsSubmitting(false);
        setFormData(null);
      },
      onClose: () => {
        toast({
          title: "Payment Cancelled",
          description: "You closed the payment modal.",
          status: "info",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsSubmitting(false);
        setFormData(null);
      },
    });
  }, [formData]);

  const onSubmit = (data: RegisterFormValues) => {
    if (data.amount <= 0) {
      toast({
        title: "Invalid Price",
        description: "Please select a course to see the price.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setIsSubmitting(true);
    setFormData(data);
  };

  return (
    <Box p={4}>
      <Heading textAlign="center">Register for your Course Today</Heading>
      <Text textAlign="center" mb={4}>
        Input all your details and we will get back to you via email.
      </Text>
      <Box bg="white" p={4} borderRadius={10}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Full Name" {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel mt={4}>Email</FormLabel>
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.course}>
            <FormLabel mt={4}>Course</FormLabel>
            <Select placeholder="Select" {...register("course")}>
              <option value="UX Research">UX Research</option>
              <option value="Product Design">Product Design</option>
              <option value="Frontend Development">Frontend Development</option>
            </Select>
            <FormErrorMessage>{errors.course?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.learning_mode}>
            <FormLabel mt={4}>Learning Mode</FormLabel>
            <Select placeholder="Select" {...register("learning_mode")}>
              <option value="Virtual">Virtual</option>
              <option value="Physical" disabled>
                Physical (Unavailable)
              </option>
            </Select>
            <FormErrorMessage>{errors.learning_mode?.message}</FormErrorMessage>
          </FormControl>

          {/* Show ONLY normal price in the form */}
          <FormControl isInvalid={!!errors.amount}>
            <FormLabel mt={4}>Course Price</FormLabel>
            <Input isReadOnly value={`₦${watch("amount").toLocaleString()}`} />
            <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            mt={6}
            w="full"
            bg="#a020f0"
            color="white"
            isLoading={isSubmitting}
            loadingText="Processing..."
          >
            Submit and Pay
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;
