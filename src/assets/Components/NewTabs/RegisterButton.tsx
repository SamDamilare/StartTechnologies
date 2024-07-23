import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterForm from "../NewTabs/RegisterForm";
import "../../style.css";

const RegisterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });

  return (
    <div>
      <Link to="" onClick={onOpen}>
        <Box
          mt="40px"
          bgColor={"#a020f0"}
          color={"white"}
          width={{ base: "120px", md: "150px" }}
          borderRadius={"5px"}
          alignContent={"center"}
          height={"50px"}
          textAlign={"center"}
          display="flex"
          alignItems="center"
          justifyContent="center"
          id="register"
        >
          Register
        </Box>
      </Link>
      <Center>
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
          <ModalOverlay />
          <ModalContent bgColor={{ base: "transparent", lg: "#f2f2f2" }}>
            <ModalCloseButton />
            <ModalBody>
              <RegisterForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </div>
  );
};

export default RegisterButton;
