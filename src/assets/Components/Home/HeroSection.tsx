// import React from "react";
import {
  Text,
  Box,
  VStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterForm from "../NewTabs/RegisterForm";
import "../../style.css";

const HeroSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Center>
        <VStack alignItems={"center"} p={2}>
          <Box mt="60px" w={{ base: "300px", md: "600px", lg: "952px" }}>
            <Text
              fontSize={{ base: "20px", md: "40px", lg: "45px" }}
              textAlign={"center"}
              fontWeight={600}
              color="#a020f0"
            >
              Build <span style={{ color: "#50585f" }}>Your Career at </span>
              VELARIX
            </Text>
          </Box>
          <Box w={{ base: "300px", md: "700px", lg: "700px" }}>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "20px" }}
              textAlign={"center"}
            >
              Fast-track your path to leadership with hands-on tech skills
              training designed to accelerate your career growth in record time.
            </Text>
          </Box>

          <Link to="">
            <Box
              mt="40px"
              bgColor={"#a020f0"}
              color={"white"}
              width={{ base: "300px", md: "300px", lg: "150px" }}
              borderRadius={"5px"}
              alignContent={"center"}
              height={"50px"}
              textAlign={"center"}
              onClick={onOpen}
              fontSize={{ base: "sm", md: "md", lg: "md" }}
              id="register"
            >
              Register
            </Box>
          </Link>
          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt="20px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1717497308/SSD/Rectangle_1_gssaj3.png"
          />
        </VStack>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />

        <ModalContent bgColor="#f2f2f2" w="1000px" p="30px">
          {/* <ModalHeader>
              <Text fontSize={"45px"} fontWeight={600}>
                Register for your Course today
              </Text>
            </ModalHeader> */}
          <ModalCloseButton />
          <ModalBody>
            <RegisterForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default HeroSection;
