import React from "react";
import {
  Text,
  Box,
  VStack,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterForm from "../NewTabs/RegisterForm";

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
              Accelerate{" "}
              <span style={{ color: "#50585f" }}>Your Career in </span>
              UI/UX Design
            </Text>
          </Box>
          <Box w={{ base: "300px", md: "800px", lg: "952px" }}>
            <Text
              fontSize={{ base: "sm", md: "md", lg: "20px" }}
              textAlign={"center"}
            >
              Level-up your design skills and accelerate your design career by
              learning how to build stunning visual interfaces and interactive
              prototypes using cutting-edge tool
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
