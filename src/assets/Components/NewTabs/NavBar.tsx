// import React from "react";
// import { Heading, HStack, Button, Box, Flex, Spacer } from "@chakra-ui/react";

// const NavBar = () => {
//   return (
//     <Flex mt="56px">
//       <Box ml="160px">
//         <a href="">
//           <Heading>SSD</Heading>
//         </a>
//       </Box>
//       <Spacer mr="293px" />
//       <Box>
//         <Flex justifyContent={"flex-end"} spacing="24px">
//           <Box>
//             <HStack spacing="24px" mr="243px">
//               <Box p="8px">
//                 <a href="">Home</a>
//               </Box>
//               <Box p="8px">
//                 <a href="">Courses</a>
//               </Box>
//               <Box p="8px">
//                 <a href="">About Us</a>
//               </Box>
//               <Box p="8px">
//                 <a href="">Contact Us</a>
//               </Box>
//             </HStack>
//           </Box>

//           <Button>Register</Button>
//         </Flex>
//       </Box>
//     </Flex>
//   );
// };

// export default NavBar;

import {
  Flex,
  Button,
  HStack,
  chakra,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

// import { Link } from "react-scroll";

import { React } from "react";
import RegisterForm from "./RegisterForm";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <chakra.header id="header" ml="130px" mr="130px" fontSize={"13px"}>
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* // Logo */}

        <Text mr="273px">
          <Link to="/">SSD</Link>
        </Text>
        {/* // Nav Items */}
        <HStack as="nav">
          <HStack spacing="2" mr="243px">
            <Box p="8px">
              <a href="/">Home</a>{" "}
            </Box>{" "}
            <Box p="8px">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="none"
                  fontSize={"13px"}
                >
                  Courses
                </MenuButton>
                <MenuList>
                  {/* <MenuItem>
                  <Link ></Link>
                  Product Design</MenuItem> */}
                  <MenuItem>
                    <Link to="/uidesigncourse">UI Design</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/uxdesigncourse">UX Design</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/uxresearch">UX Research</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/idcourse">Interaction Design</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/dtcourse">Design Thinking</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/uiuxdesigncourse">UI/UX Design</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>{" "}
            <Box p="8px">
              <a href="/about">About Us</a>{" "}
            </Box>{" "}
            <Box p="8px">
              <a href="/contact">Contact Us</a>{" "}
            </Box>
          </HStack>
          <Button bgColor={"#a020f0"} color={"white"} onClick={onOpen}>
            <Link to="">Register</Link>
          </Button>
        </HStack>
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
      </Flex>
    </chakra.header>
  );
}
