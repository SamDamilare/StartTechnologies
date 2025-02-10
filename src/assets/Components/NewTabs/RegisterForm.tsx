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
} from "@chakra-ui/react";

const RegisterForm = () => {
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
              <Input type="text" placeholder="Full Name" />
              <FormLabel mt={4} mb={0}>
                Email
              </FormLabel>
              <Input type="email" placeholder="example@email.com" />
              <FormLabel mt={4} mb={0}>
                Course of interest
              </FormLabel>
              <Select>
                <option value="">Select</option>
                <option value="">UI Design</option>
                <option value="">UX Design</option>
                <option value="">UI/UX Design</option>
                <option value="">UX Research</option>
                <option value="">Design Thinking</option>
                <option value="">Interaction Design</option>
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
              <Input type="text" placeholder="Select" />
              {/* <FormLabel mt={4} mb={0}>
                Learning Mode
              </FormLabel>
              <Select>
                <option>Select</option>
              </Select> */}
            </FormControl>

            <Button w="full" mt={4} bgColor={"#a020f0"} color={"white"}>
              Submit
            </Button>
          </Box>
        </VStack>
      </Center>
    </div>
  );
};

export default RegisterForm;
