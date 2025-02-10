import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Center,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterForm from "../NewTabs/RegisterForm";

const RegisterNowButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });

  return (
    <>
      <Button
        mt="20px"
        px="30px"
        variant="outline"
        color="#a020f0"
        fontWeight={300}
        border="1px"
      >
        <Link to="" onClick={onOpen}>
          Register now
        </Link>
      </Button>
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
    </>
  );
};

export default RegisterNowButton;
