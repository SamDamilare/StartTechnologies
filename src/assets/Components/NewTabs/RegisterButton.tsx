// import {
//   Box,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
//   useBreakpointValue,
//   Center,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import RegisterForm from "../NewTabs/RegisterForm";
// import "../../style.css";
// import PayDetails from "./PayDetails";

// const RegisterButton = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [showPayDetails, setShowPayDetails] = useState(false);
//   const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });

//   const handleShowPayDetails = () => {
//     console.log("myname", showPayDetails);
//     setShowPayDetails(true);
//   };
//   return (
//     <div>
//       <Link to="" onClick={onOpen}>
//         <Box
//           mt="40px"
//           bgColor={"#a020f0"}
//           color={"white"}
//           width={{ base: "120px", md: "150px" }}
//           borderRadius={"5px"}
//           alignContent={"center"}
//           height={"50px"}
//           textAlign={"center"}
//           display="flex"
//           alignItems="center"
//           justifyContent="center"
//           id="register"
//         >
//           Register
//         </Box>
//       </Link>
//       <Center>
//         <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
//           <ModalOverlay />
//           <ModalContent bgColor={{ base: "transparent", lg: "#f2f2f2" }}>
//             <ModalCloseButton />
//             <ModalBody>
//               {!showPayDetails ? (
//                 <RegisterForm onSuccess={handleShowPayDetails} />
//               ) : (
//                 <PayDetails />
//               )}
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Center>
//       {/* PayDetails Modal */}
//     </div>
//   );
// };

// export default RegisterButton;

import { Box, Center } from "@chakra-ui/react";
import "../../style.css";
import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div>
      <Link to="https://form.jotform.com/250465914886570" target="_blank">
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
    </div>
  );
};

export default RegisterButton;
