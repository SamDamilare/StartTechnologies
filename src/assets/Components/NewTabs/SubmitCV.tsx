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
          <Text fontWeight={500} fontSize={"28px"}>
            Submit your CV to get quick Internships
          </Text>
          <Text fontSize={"sm"}>
            Input all your details and we will get back to you via your email.
          </Text>
          <Box
            bgColor={"white"}
            p="30px"
            borderRadius={"15px"}
            boxShadow={"100px black"}
            w="400px"
            mt={4}
          >
            <FormControl>
              <FormLabel mb={0}>Full Name</FormLabel>
              <Input type="text" placeholder="Full Name" />
              <FormLabel mt={2} mb={0}>
                Email
              </FormLabel>
              <Input type="email" placeholder="example@email.com" />
              <FormLabel mt={2} mb={0}>
                Job Role
              </FormLabel>
              <Select>
                <option value="">UI Designer</option>
                <option value="">UX Designer</option>
                <option value="">Interaction Designer</option>
                <option value="">Graphics Designer</option>
                <option value="">Digital Marketing</option>
                <option value="">Frontend Developer</option>
                <option value="">Select</option>
              </Select>
              <FormLabel mt={2} mb={0}>
                Did you graduate from SSD?
              </FormLabel>
              <Select>
                <option value="">select</option>
              </Select>
              <FormLabel mt={2} mb={0}>
                Certificate ID? (optional)
              </FormLabel>
              <Input type="text" placeholder="text" />
              <FormLabel mt={2} mb={0}>
                Link to Curriculum Vitae
              </FormLabel>
              <Input type="text" placeholder="text" />
              <FormLabel mt={2} mb={0}>
                Link to portfolio?
              </FormLabel>
              <Input type="text" placeholder="text" />
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
