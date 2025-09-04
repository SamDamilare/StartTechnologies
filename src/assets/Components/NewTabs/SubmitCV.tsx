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
// } from "@chakra-ui/react";

// const SubmitCV = () => {
//   return (
//     <div>
//       <Center>
//         <VStack fontFamily={"poppins"}>
//           <Text fontWeight={500} fontSize={"28px"}>
//             Submit your CV to get quick Internships
//           </Text>
//           <Text fontSize={"sm"}>
//             Input all your details and we will get back to you via your email.
//           </Text>
//           <Box
//             bgColor={"white"}
//             p="30px"
//             borderRadius={"15px"}
//             boxShadow={"100px black"}
//             w="400px"
//             mt={4}
//           >
//             <FormControl>
//               <FormLabel mb={0}>Full Name</FormLabel>
//               <Input type="text" placeholder="Full Name" />
//               <FormLabel mt={2} mb={0}>
//                 Email
//               </FormLabel>
//               <Input type="email" placeholder="example@email.com" />
//               <FormLabel mt={2} mb={0}>
//                 Job Role
//               </FormLabel>
//               <Select>
//                 <option value="">UI Designer</option>
//                 <option value="">UX Designer</option>
//                 <option value="">Interaction Designer</option>
//                 <option value="">Graphics Designer</option>
//                 <option value="">Digital Marketing</option>
//                 <option value="">Frontend Developer</option>
//                 <option value="">Select</option>
//               </Select>
//               <FormLabel mt={2} mb={0}>
//                 Did you graduate from SSD?
//               </FormLabel>
//               <Select>
//                 <option value="">select</option>
//                 <option value="">Yes</option>
//                 <option value="">No</option>
//               </Select>
//               <FormLabel mt={2} mb={0}>
//                 Certificate ID? (optional)
//               </FormLabel>
//               <Input type="text" placeholder="text" />
//               <FormLabel mt={2} mb={0}>
//                 Link to Curriculum Vitae
//               </FormLabel>
//               <Input type="text" placeholder="text" />
//               <FormLabel mt={2} mb={0}>
//                 Link to portfolio?
//               </FormLabel>
//               <Input type="text" placeholder="text" />
//             </FormControl>

//             <Button w="full" mt={4} bgColor={"#a020f0"} color={"white"}>
//               Submit
//             </Button>
//           </Box>
//         </VStack>
//       </Center>
//     </div>
//   );
// };

// export default SubmitCV;

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import supabase from "../../../Supabase-Client/supabase"; // ✅ adjust path if needed

const SubmitCV = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    alumni: "",
    certificate: "",
    cvlink: "",
    portfoliolink: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.role ||
      !formData.alumni ||
      !formData.cvlink
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill all required fields before submitting.",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setIsSubmitting(true);

    // const { data, error } = await supabase.from("submit cv").insert([
    //   {
    //     name: formData.name,
    //     email: formData.email,
    //     role: formData.role,
    //     alumni: formData.alumni,
    //     certificate: formData.certificate,
    //     cvlink: formData.cvlink,
    //     portfoliolink: formData.portfoliolink,
    //   },
    // ]);

    const { error } = await supabase.from("submit cv").insert([
      {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        alumni: formData.alumni,
        certificate: formData.certificate,
        cvlink: formData.cvlink,
        portfoliolink: formData.portfoliolink,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      console.error("Supabase Insert Error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "CV Submitted ✅",
        description: "We’ll review your CV and get back to you soon.",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      setFormData({
        name: "",
        email: "",
        role: "",
        alumni: "",
        certificate: "",
        cvlink: "",
        portfoliolink: "",
      });
    }
  };

  return (
    <Center>
      <VStack fontFamily="poppins">
        <Text fontWeight={500} fontSize="28px">
          Submit your CV to get quick Internships
        </Text>
        <Text fontSize="sm">
          Input all your details and we will get back to you via your email.
        </Text>
        <Box
          bgColor="white"
          p="30px"
          borderRadius="15px"
          boxShadow="md"
          w="400px"
          mt={4}
        >
          <FormControl>
            <FormLabel mb={0}>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormLabel mt={2} mb={0}>
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="example@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormLabel mt={2} mb={0}>
              Job Role
            </FormLabel>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <option value="">Select</option>
              <option value="UI Designer">UI Designer</option>
              <option value="UX Designer">UX Designer</option>
              <option value="Interaction Designer">Interaction Designer</option>
              <option value="Graphics Designer">Graphics Designer</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Frontend Developer">Frontend Developer</option>
            </Select>
            <FormLabel mt={2} mb={0}>
              Did you graduate from SSD?
            </FormLabel>
            <Select
              name="alumni"
              value={formData.alumni}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Select>
            <FormLabel mt={2} mb={0}>
              Certificate ID? (optional)
            </FormLabel>
            <Input
              type="text"
              placeholder="Certificate ID"
              name="certificate"
              value={formData.certificate}
              onChange={handleChange}
            />
            <FormLabel mt={2} mb={0}>
              Link to Curriculum Vitae
            </FormLabel>
            <Input
              type="text"
              placeholder="https://..."
              name="cvlink"
              value={formData.cvlink}
              onChange={handleChange}
            />
            <FormLabel mt={2} mb={0}>
              Link to Portfolio
            </FormLabel>
            <Input
              type="text"
              placeholder="https://..."
              name="portfoliolink"
              value={formData.portfoliolink}
              onChange={handleChange}
            />
          </FormControl>

          <Button
            w="full"
            mt={4}
            bgColor="#a020f0"
            color="white"
            isLoading={isSubmitting}
            loadingText="Submitting..."
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </VStack>
    </Center>
  );
};

export default SubmitCV;
