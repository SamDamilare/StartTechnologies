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

const RegisterForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [amount, setAmount] = useState("");

  const toast = useToast();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);

    const priceMap: Record<string, string> = {
      "UX Research": "N 70,000",
      "Frontend Development": "N 100,000",
      "Product Design": "N 100,000",
    };
    setAmount(priceMap[value] || "");
  };
  onSuccess();

  const handleSubmit = () => {
    if (!fullName || !email || !selectedOption) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Registration Successful",
        description: "You have successfully registered!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // onSuccess(); // ✅ Trigger the modal change
    }
  };

  return (
    <div>
      <Center>
        <VStack fontFamily={"poppins"}>
          <Text
            fontWeight={500}
            fontSize={"25px"}
            w={{ base: "300px", md: "300px", lg: "400px" }}
            textAlign={"center"}
          >
            Register for your Course Today
          </Text>
          <Text
            fontSize={"12px"}
            textAlign={"center"}
            w={{ base: "300px", md: "300px", lg: "400px" }}
          >
            Input all your details and we will get back to you via your email.
          </Text>
          <Box
            bgColor={"white"}
            p="30px"
            borderRadius={"15px"}
            boxShadow={"100px black"}
            w={{ base: "300px", md: "300px", lg: "400px" }}
            mt={4}
          >
            <FormControl>
              <FormLabel mb={0}>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <FormLabel mt={4} mb={0}>
                Email
              </FormLabel>
              <Input
                type="email"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel mt={4} mb={0}>
                Course of interest
              </FormLabel>
              <Select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select</option>
                <option value="UX Research">UX Research</option>
                <option value="Product Design">Product Design</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>

                <option value="" disabled>
                  UI Design
                </option>
                <option value="" disabled>
                  UX Design
                </option>
                <option value="" disabled>
                  UI/UX Design
                </option>

                <option value="" disabled>
                  Design Thinking
                </option>
                <option value="" disabled>
                  Interaction Design
                </option>
              </Select>
              <FormLabel mt={4} mb={0}>
                Style of learning
              </FormLabel>
              <Select>
                <option value="">select</option>
                <option value="Virtual">Virtual</option>
                <option value="physical" disabled>
                  Physical
                </option>
              </Select>

              <FormLabel mt={4} mb={0}>
                Price
              </FormLabel>

              <Input
                type="text"
                placeholder="Select A Course"
                value={amount}
                isReadOnly
              />
            </FormControl>

            <Button
              w="full"
              mt={4}
              bgColor={"#a020f0"}
              color={"white"}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </VStack>
      </Center>
    </div>
  );
};

export default RegisterForm;
