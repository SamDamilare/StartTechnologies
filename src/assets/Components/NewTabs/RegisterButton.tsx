// import { useState } from "react";
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
//   useBreakpointValue,
//   Center,
//   Box,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import RegisterForm from "../NewTabs/RegisterForm"; // Adjust the path if necessary
// // import PaystackForm from "./PaystackForm"; // Adjust the path if necessary
// import "../../style.css";

// const RegisterButton = () => {
//   const {
//     isOpen: isRegOpen,
//     onOpen: onRegOpen,
//     onClose: onRegClose,
//   } = useDisclosure(); // Renamed for clarity
//   const {
//     isOpen: isPayOpen,
//     onOpen: onPayOpen,
//     onClose: onPayClose,
//   } = useDisclosure();
//   const [registrationData, setRegistrationData] = useState<any | null>(null); // To store data
//   const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });

//   // Callback to receive data from RegisterForm
//   const handleRegistrationSuccess = (data: any) => {
//     setRegistrationData(data); // Store the registration data
//     onRegClose();
//     onPayOpen();
//   };

//   const handlePaymentSuccess = (response: any) => {
//     //  Handle successful payment (e.g., send to backend, show success)
//     console.log("Payment successful!", response);
//     onPayClose();
//   };

//   const handlePaymentClose = () => {
//     onPayClose();
//   };

//   return (
//     <div>
//       <Link to="" onClick={onRegOpen}>
//         {" "}
//         {/* Changed to onRegOpen */}
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
//         <Modal isOpen={isRegOpen} onClose={onRegClose} size={modalSize}>
//           {" "}
//           {/* Changed to isRegOpen/onRegClose */}
//           <ModalOverlay />
//           <ModalContent bgColor={{ base: "transparent", lg: "#f2f2f2" }}>
//             <ModalCloseButton />
//             <ModalBody>
//               <RegisterForm onSuccess={handleRegistrationSuccess} />{" "}
//               {/* Pass the callback */}
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Center>

//       {/* Paystack Modal */}
//       <Center>
//         <Modal isOpen={isPayOpen} onClose={onPayClose} size={modalSize}>
//           <ModalOverlay />
//           <ModalContent bgColor={{ base: "transparent", lg: "#f2f2f2" }}>
//             <ModalCloseButton />
//             <ModalBody>
//               {registrationData && (
//                 <PaystackForm
//                   email={registrationData.email}
//                   amount={registrationData.price} // Ensure correct amount
//                   reference={`REG_${new Date().getTime()}_${Math.floor(
//                     Math.random() * 1000
//                   )}`}
//                   onSuccess={handlePaymentSuccess}
//                   onClose={handlePaymentClose}
//                   name={registrationData.name}
//                   course={registrationData.course}
//                   learning_mode={registrationData.learning_mode}
//                 />
//               )}
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Center>
//     </div>
//   );
// };

// export default RegisterButton;

// import { Box } from "@chakra-ui/react";
// import "../../style.css";
// import { Link } from "react-router-dom";

// const RegisterButton = () => {
//   return (
//     <div>
//       <Link to="https://form.jotform.com/250465914886570" target="_blank">
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
//     </div>
//   );
// };

// export default RegisterButton;

// import React from "react";

// const RegisterButton = () => {
//   return <div>Naso We Dey Do Am</div>;
// };

// export default RegisterButton;

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Center,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RegisterForm from "../NewTabs/RegisterForm"; // adjust the path if needed
import "../../style.css";

const RegisterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });

  return (
    <div>
      <Link to="" onClick={onOpen}>
        <Box
          mt="40px"
          bgColor="#a020f0"
          color="white"
          width={{ base: "120px", md: "150px" }}
          borderRadius="5px"
          height="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          id="register"
          _hover={{ bg: "purple.900", color: "white" }}
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
              {/* RegisterForm already handles Flutterwave + Supabase */}
              <RegisterForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </div>
  );
};

export default RegisterButton;
