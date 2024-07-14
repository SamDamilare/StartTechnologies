// import React from "react";
// import {
//   Text,
//   Box,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import RegisterForm from "../NewTabs/RegisterForm";

// const RegisterButton = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <div>
//       <Link to="" onClick={onOpen}>
//         <Box
//           mt="40px"
//           bgColor={"#a020f0"}
//           color={"white"}
//           width={"150px"}
//           borderRadius={"5px"}
//           alignContent={"center"}
//           height={"50px"}
//           textAlign={"center"}
//         >
//           Register
//         </Box>
//       </Link>
//       <Modal
//         isOpen={isOpen}
//         onClose={onClose}
//         size={{ base: "none", md: "none", lg: "2xl" }}
//       >
//         <ModalOverlay  />
//         <ModalContent bgColor="#f2f2f2" w="1000px" p="30px">
//           {/* <ModalHeader>
//               <Text fontSize={"45px"} fontWeight={600}>
//                 Register for your Course today
//               </Text>
//             </ModalHeader> */}
//           <ModalCloseButton />
//           <ModalBody>
//             <RegisterForm />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };

// export default RegisterButton;

import React from "react";
import {
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterForm from "../NewTabs/RegisterForm";

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
        >
          Register
        </Box>
      </Link>
      <Center>
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
          <ModalOverlay base="transparent" lg="100%" />
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
