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
import PayDetails from "./PayDetails";

const RegisterNowButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPayOpen,
    onOpen: onPayOpen,
    onClose: onPayClose,
  } = useDisclosure();
  const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });
  const handleRegistrationSuccess = () => {
    onClose(); // Close the registration modal
    onPayOpen(); // Open the PayDetails modal
  };

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
              <RegisterForm onSuccess={handleRegistrationSuccess} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
      {/* PayDetails Modal */}
      <Center>
        <Modal isOpen={isPayOpen} onClose={onPayClose} size={modalSize}>
          <ModalOverlay />
          <ModalContent bgColor={{ base: "transparent", lg: "#f2f2f2" }}>
            <ModalCloseButton />
            <ModalBody>
              <PayDetails />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default RegisterNowButton;
