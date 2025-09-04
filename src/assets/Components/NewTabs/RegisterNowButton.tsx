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
//   Button,
// } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import RegisterForm from "../NewTabs/RegisterForm"; // Adjust the path if necessary
// import PaystackForm from "./PaystackForm"; // Adjust the path if necessary

// const RegisterNowButton = () => {
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
//   const [registrationData, setRegistrationData] = useState<any | null>(null); // To store data from RegisterForm
//   const modalSize = useBreakpointValue({ base: "full", md: "lg", lg: "2xl" });

//   // Callback function to receive data from RegisterForm
//   const handleRegistrationSuccess = (data: any) => {
//     setRegistrationData(data); // Store the registration data
//     onRegClose(); // Close the registration modal
//     onPayOpen(); // Open the payment modal
//   };

//   const handlePaymentSuccess = (response: any) => {
//     //  This is where you would handle the *successful* payment,
//     //  e.g., by sending the data to your backend (Supabase) and showing a success message.
//     console.log("Payment successful!", response);
//     onPayClose(); // Close the payment modal
//     //  You might also want to show a confirmation message here, or redirect the user.
//   };

//   const handlePaymentClose = () => {
//     onPayClose();
//   };

//   return (
//     <>
//       <Button
//         mt="20px"
//         px="30px"
//         variant="outline"
//         color="#a020f0"
//         fontWeight={300}
//         border="1px"
//       >
//         <Link to="" onClick={onRegOpen}>
//           {" "}
//           {/* Changed to onRegOpen */}
//           Register now
//         </Link>
//       </Button>
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
//               {registrationData && ( // Only render PaystackForm if we have data
//                 <PaystackForm
//                   email={registrationData.email}
//                   amount={registrationData.price} // Make sure this is the amount
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
//     </>
//   );
// };

// export default RegisterNowButton;

// import React from "react";

// const RegisterNowButton = () => {
//   return <div>Naso We Dey Do Am</div>;
// };

// export default RegisterNowButton;
//

import {
  useDisclosure,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Center,
  Button,
} from "@chakra-ui/react";
import RegisterForm from "../NewTabs/RegisterForm"; // Make sure this path is correct

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
        onClick={onOpen}
      >
        Register Now
      </Button>

      <Center>
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
          <ModalOverlay />
          <ModalContent bgColor={{ base: "transparent", lg: "#f2f2f2" }}>
            <ModalCloseButton />
            <ModalBody>
              {/* ✅ RegisterForm is self-contained, no props needed */}
              <RegisterForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default RegisterNowButton;
