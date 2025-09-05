// import {
//   Flex,
//   Button,
//   chakra,
//   Box,
//   Text,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
//   Drawer,
//   DrawerBody,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   IconButton,
//   VStack,
// } from "@chakra-ui/react";
// import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import RegisterForm from "./RegisterForm";
// import "../../style.css";

// export default function NavBar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     isOpen: isDrawerOpen,
//     onOpen: onDrawerOpen,
//     onClose: onDrawerClose,
//   } = useDisclosure();

//   return (
//     <chakra.header
//       id="header"
//       ml={{ base: "10px", md: "50px", lg: "130px" }}
//       mr={{ base: "10px", md: "50px", lg: "130px" }}
//       fontSize={{ base: "10px", md: "13px" }}
//     >
//       <Flex w="100%" px="6" py="5" align="center" justify="space-between">
//         {/* Logo */}
//         <Text mr={{ base: "auto", md: "273px" }}>
//           <Link to="/">SSD</Link>
//         </Text>

//         {/* Desktop Nav Items */}
//         <Flex
//           as="nav"
//           display={{ base: "none", md: "flex" }}
//           gap="240px"
//           alignItems={"center"}
//         >
//           <Flex gap="2" mr="auto" alignItems={"center"}>
//             <Box p="8px">
//               <Link to="/">
//                 <a>Home</a>
//               </Link>
//             </Box>
//             <Box p="8px">
//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rightIcon={<ChevronDownIcon />}
//                   bg="none"
//                   fontSize={"13px"}
//                 >
//                   <a>Courses</a>
//                 </MenuButton>
//                 <MenuList>
//                   <MenuItem>
//                     <Link to="/uidesigncourse">UI Design</Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link to="/uxdesigncourse">UX Design</Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link to="/uxresearch">UX Research</Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link to="/idcourse">Interaction Design</Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link to="/dtcourse">Design Thinking</Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link to="/uiuxdesigncourse">UI/UX Design</Link>
//                   </MenuItem>
//                 </MenuList>
//               </Menu>
//             </Box>
//             <Box p="8px">
//               <Link to="/about">
//                 <a>About Us</a>
//               </Link>
//             </Box>
//             <Box p="8px">
//               <Link to="/contact">
//                 <a>Contact Us</a>
//               </Link>
//             </Box>
//           </Flex>
//           <Button bgColor={"#a020f0"} color={"white"} onClick={onOpen}>
//             Register
//           </Button>
//         </Flex>

//         {/* Mobile Menu Button */}
//         <IconButton
//           display={{ base: "flex", md: "none" }}
//           icon={<HamburgerIcon />}
//           onClick={onDrawerOpen}
//           variant="outline"
//           aria-label="Open Menu"
//         />

//         {/* Register Modal */}
//         <Modal isOpen={isOpen} onClose={onClose} size="2xl">
//           <ModalOverlay />
//           <ModalContent bgColor="#f2f2f2" w="1000px" p="30px">
//             <ModalCloseButton />
//             <ModalBody>
//               <RegisterForm />
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Flex>

//       {/* Mobile Drawer */}
//       <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerBody>
//             <VStack as="nav" spacing="4" alignItems={"start"}>
//               <Box p="8px">
//                 <Link to="/">Home</Link>
//               </Box>
//               <Box p="8px">
//                 <Menu>
//                   <MenuButton
//                     as={Button}
//                     rightIcon={<ChevronDownIcon />}
//                     bg="none"
//                     fontSize={"13px"}
//                   >
//                     Courses
//                   </MenuButton>
//                   <MenuList>
//                     <MenuItem>
//                       <Link to="/uidesigncourse">UI Design</Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link to="/uxdesigncourse">UX Design</Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link to="/uxresearch">UX Research</Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link to="/idcourse">Interaction Design</Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link to="/dtcourse">Design Thinking</Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link to="/uiuxdesigncourse">UI/UX Design</Link>
//                     </MenuItem>
//                   </MenuList>
//                 </Menu>
//               </Box>
//               <Box p="8px">
//                 <Link to="/about">About Us</Link>
//               </Box>
//               <Box p="8px">
//                 <Link to="/contact">Contact Us</Link>
//               </Box>
//               <Button bgColor={"#a020f0"} color={"white"} onClick={onOpen}>
//                 Register
//               </Button>
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </chakra.header>
//   );
// }

// import {
//   Flex,
//   Button,
//   chakra,
//   Box,
//   Text,
//   Menu,
//   Image,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
//   Drawer,
//   DrawerBody,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   IconButton,
//   VStack,
// } from "@chakra-ui/react";
// import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
// import { Link, useLocation } from "react-router-dom";
// import RegisterForm from "./RegisterForm";
// import "../../style.css";

// export default function NavBar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const {
//     isOpen: isDrawerOpen,
//     onOpen: onDrawerOpen,
//     onClose: onDrawerClose,
//   } = useDisclosure();
//   const location = useLocation();

//   const linkStyle = {
//     px: 2,
//     py: 1,
//     color: "black",
//     _hover: { textDecoration: "none", color: "purple.600" },
//     borderBottom: "2px solid",
//     borderColor: "transparent",
//     transition: "color 0.3s ease, border-color 0.3s ease",
//   };

//   const activeLinkStyle = {
//     ...linkStyle,
//     color: "purple.600",
//     borderColor: "purple.600",
//   };

//   return (
//     <chakra.header
//       id="header"
//       ml={{ base: "10px", md: "50px", lg: "130px" }}
//       mr={{ base: "10px", md: "50px", lg: "130px" }}
//       fontSize={{ base: "10px", md: "13px" }}
//     >
//       <Flex w="100%" px="6" py="5" align="center" justify="space-between">
//         <Text mr={{ base: "auto", md: "273px" }}>
//           <Link
//             to="/"
//             style={location.pathname === "/" ? activeLinkStyle : linkStyle}
//           >
//             <Image
//               src="https://res.cloudinary.com/dktrwqio1/image/upload/v1729855347/NYRadio/Colored_Logo__2_-removebg-preview_tppkrv.png"
//               w="60px"
//             />
//           </Link>
//         </Text>

//         <Flex
//           as="nav"
//           display={{ base: "none", md: "flex" }}
//           gap="240px"
//           alignItems={"center"}
//         >
//           <Flex gap="2" mr="auto" alignItems={"center"}>
//             <Box p="8px">
//               <Link
//                 to="/"
//                 style={location.pathname === "/" ? activeLinkStyle : linkStyle}
//               >
//                 Home
//               </Link>
//             </Box>
//             <Box p="8px">
//               <Menu>
//                 <MenuButton
//                   as={Button}
//                   rightIcon={<ChevronDownIcon />}
//                   bg="none"
//                   // className="no-animation"
//                   fontWeight={400}
//                   fontSize={"13px"}
//                   _active={{
//                     transform: "none",
//                     bg: "transparent",
//                     // motion: "none",
//                   }}
//                   _hover={{ bg: "transparent" }}
//                   transition="none"
//                 >
//                   Courses
//                 </MenuButton>
//                 <MenuList>
//                   <MenuItem>
//                     <Link
//                       to="/uxresearch"
//                       style={
//                         location.pathname === "/uxresearch"
//                           ? activeLinkStyle
//                           : linkStyle
//                       }
//                     >
//                       UX Research
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       to="/productDesign"
//                       style={
//                         location.pathname === "/productDesign"
//                           ? activeLinkStyle
//                           : linkStyle
//                       }
//                     >
//                       Product Design
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       to="/frontendDev"
//                       style={
//                         location.pathname === "/frontendDev"
//                           ? activeLinkStyle
//                           : linkStyle
//                       }
//                     >
//                       Frontend Development
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       to="/uidesigncourse"
//                       style={{
//                         pointerEvents: "none", // Disables clicks
//                         color: "gray", // Makes it look disabled
//                         opacity: 0.6, // Reduces visibility
//                       }}
//                     >
//                       UI Design
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       to="/uxdesigncourse"
//                       style={{
//                         pointerEvents: "none", // Disables clicks
//                         color: "gray", // Makes it look disabled
//                         opacity: 0.6, // Reduces visibility
//                       }}
//                     >
//                       UX Design
//                     </Link>
//                   </MenuItem>

//                   <MenuItem>
//                     <Link
//                       to="/idcourse"
//                       style={{
//                         pointerEvents: "none", // Disables clicks
//                         color: "gray", // Makes it look disabled
//                         opacity: 0.6, // Reduces visibility
//                       }}
//                     >
//                       Interaction Design
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       to="/dtcourse"
//                       style={{
//                         pointerEvents: "none", // Disables clicks
//                         color: "gray", // Makes it look disabled
//                         opacity: 0.6, // Reduces visibility
//                       }}
//                     >
//                       Design Thinking
//                     </Link>
//                   </MenuItem>
//                   <MenuItem>
//                     <Link
//                       to="/uiuxdesigncourse"
//                       style={{
//                         pointerEvents: "none", // Disables clicks
//                         color: "gray", // Makes it look disabled
//                         opacity: 0.6, // Reduces visibility
//                       }}
//                     >
//                       UI/UX Design
//                     </Link>
//                   </MenuItem>
//                 </MenuList>
//               </Menu>
//             </Box>
//             <Box p="8px">
//               <Link
//                 to="/about"
//                 style={
//                   location.pathname === "/about" ? activeLinkStyle : linkStyle
//                 }
//               >
//                 About Us
//               </Link>
//             </Box>
//             <Box p="8px">
//               <Link
//                 to="/contact"
//                 style={
//                   location.pathname === "/contact" ? activeLinkStyle : linkStyle
//                 }
//               >
//                 Contact Us
//               </Link>
//             </Box>
//           </Flex>
//           <Button
//             bgColor={"#a020f0"}
//             color={"white"}
//             onClick={onOpen}
//             className="no-animation"
//           >
//             Register
//           </Button>
//         </Flex>

//         <IconButton
//           display={{ base: "flex", md: "none" }}
//           icon={<HamburgerIcon />}
//           onClick={onDrawerOpen}
//           variant="outline"
//           aria-label="Open Menu"
//         />

//         <Modal isOpen={isOpen} onClose={onClose} size="2xl">
//           <ModalOverlay />
//           <ModalContent bgColor="#f2f2f2" w="1000px" p="30px">
//             <ModalCloseButton />
//             <ModalBody>
//               <RegisterForm />
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Flex>

//       <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerBody>
//             <VStack as="nav" spacing="4" alignItems={"start"}>
//               <Box p="8px">
//                 <Link
//                   to="/"
//                   style={
//                     location.pathname === "/" ? activeLinkStyle : linkStyle
//                   }
//                 >
//                   Home
//                 </Link>
//               </Box>
//               <Box p="8px">
//                 <Menu>
//                   <MenuButton
//                     as={Button}
//                     rightIcon={<ChevronDownIcon />}
//                     bg="none"
//                     fontSize={"13px"}
//                     _hover={{ color: "purple.600" }}
//                   >
//                     Courses
//                   </MenuButton>
//                   <MenuList>
//                     <MenuItem>
//                       <Link
//                         to="/uxresearch"
//                         style={
//                           location.pathname === "/uxresearch"
//                             ? activeLinkStyle
//                             : linkStyle
//                         }
//                       >
//                         UX Research
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link
//                         to="/productDesign"
//                         style={
//                           location.pathname === "/productDesign"
//                             ? activeLinkStyle
//                             : linkStyle
//                         }
//                       >
//                         Product Design
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link
//                         to="/frontendDev"
//                         style={
//                           location.pathname === "/frontendDev"
//                             ? activeLinkStyle
//                             : linkStyle
//                         }
//                       >
//                         Frontend Development
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link
//                         to="/uidesigncourse"
//                         style={{
//                           pointerEvents: "none", // Disables clicks
//                           color: "gray", // Makes it look disabled
//                           opacity: 0.6, // Reduces visibility
//                         }}
//                       >
//                         UI Design
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link
//                         to="/uxdesigncourse"
//                         style={{
//                           pointerEvents: "none", // Disables clicks
//                           color: "gray", // Makes it look disabled
//                           opacity: 0.6, // Reduces visibility
//                         }}
//                       >
//                         UX Design
//                       </Link>
//                     </MenuItem>

//                     <MenuItem>
//                       <Link
//                         to="/idcourse"
//                         style={{
//                           pointerEvents: "none", // Disables clicks
//                           color: "gray", // Makes it look disabled
//                           opacity: 0.6, // Reduces visibility
//                         }}
//                       >
//                         Interaction Design
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link
//                         to="/dtcourse"
//                         style={{
//                           pointerEvents: "none", // Disables clicks
//                           color: "gray", // Makes it look disabled
//                           opacity: 0.6, // Reduces visibility
//                         }}
//                       >
//                         Design Thinking
//                       </Link>
//                     </MenuItem>
//                     <MenuItem>
//                       <Link
//                         to="/uiuxdesigncourse"
//                         style={{
//                           pointerEvents: "none", // Disables clicks
//                           color: "gray", // Makes it look disabled
//                           opacity: 0.6, // Reduces visibility
//                         }}
//                       >
//                         UI/UX Design
//                       </Link>
//                     </MenuItem>
//                   </MenuList>
//                 </Menu>
//               </Box>
//               <Box p="8px">
//                 <Link
//                   to="/about"
//                   style={
//                     location.pathname === "/about" ? activeLinkStyle : linkStyle
//                   }
//                 >
//                   About Us
//                 </Link>
//               </Box>
//               <Box p="8px">
//                 <Link
//                   to="/contact"
//                   style={
//                     location.pathname === "/contact"
//                       ? activeLinkStyle
//                       : linkStyle
//                   }
//                 >
//                   Contact Us
//                 </Link>
//               </Box>
//               <Button bgColor={"#a020f0"} color={"white"} onClick={onOpen}>
//                 Register
//               </Button>
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </chakra.header>
//   );
// }

import {
  Flex,
  Button,
  chakra,
  Box,
  Text,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import RegisterForm from "./RegisterForm";

import "../../style.css";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const location = useLocation();

  const linkStyle = {
    px: 2,
    py: 1,
    color: "black",
    _hover: { textDecoration: "none", color: "purple.600" },
    borderBottom: "2px solid",
    borderColor: "transparent",
    transition: "color 0.3s ease, border-color 0.3s ease",
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: "purple.600",
    borderColor: "purple.600",
  };

  return (
    <chakra.header
      id="header"
      ml={{ base: "10px", md: "50px", lg: "130px" }}
      mr={{ base: "10px", md: "50px", lg: "130px" }}
      fontSize={{ base: "10px", md: "13px" }}
    >
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Text mr={{ base: "auto", md: "273px" }}>
          <Link
            to="/"
            style={location.pathname === "/" ? activeLinkStyle : linkStyle}
          >
            <Image
              src="https://res.cloudinary.com/dktrwqio1/image/upload/v1729855347/NYRadio/Colored_Logo__2_-removebg-preview_tppkrv.png"
              w="60px"
            />
          </Link>
        </Text>

        <Flex
          as="nav"
          display={{ base: "none", md: "flex" }}
          gap="240px"
          alignItems={"center"}
        >
          <Flex gap="2" mr="auto" alignItems={"center"}>
            <Box p="8px">
              <Link
                to="/"
                style={location.pathname === "/" ? activeLinkStyle : linkStyle}
              >
                Home
              </Link>
            </Box>
            <Box p="8px">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="none"
                  // className="no-animation"
                  fontWeight={400}
                  fontSize={"13px"}
                  _active={{
                    transform: "none",
                    bg: "transparent",
                    // motion: "none",
                  }}
                  _hover={{ bg: "transparent" }}
                  transition="none"
                >
                  Courses
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link
                      to="/uxresearch"
                      style={
                        location.pathname === "/uxresearch"
                          ? activeLinkStyle
                          : linkStyle
                      }
                    >
                      UX Research
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/productDesign"
                      style={
                        location.pathname === "/productDesign"
                          ? activeLinkStyle
                          : linkStyle
                      }
                    >
                      Product Design
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/frontendDev"
                      style={
                        location.pathname === "/frontendDev"
                          ? activeLinkStyle
                          : linkStyle
                      }
                    >
                      Frontend Development
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/uidesigncourse"
                      style={{
                        pointerEvents: "none", // Disables clicks
                        color: "gray", // Makes it look disabled
                        opacity: 0.6, // Reduces visibility
                      }}
                    >
                      UI Design
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/uxdesigncourse"
                      style={{
                        pointerEvents: "none", // Disables clicks
                        color: "gray", // Makes it look disabled
                        opacity: 0.6, // Reduces visibility
                      }}
                    >
                      UX Design
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      to="/idcourse"
                      style={{
                        pointerEvents: "none", // Disables clicks
                        color: "gray", // Makes it look disabled
                        opacity: 0.6, // Reduces visibility
                      }}
                    >
                      Interaction Design
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/dtcourse"
                      style={{
                        pointerEvents: "none", // Disables clicks
                        color: "gray", // Makes it look disabled
                        opacity: 0.6, // Reduces visibility
                      }}
                    >
                      Design Thinking
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/uiuxdesigncourse"
                      style={{
                        pointerEvents: "none", // Disables clicks
                        color: "gray", // Makes it look disabled
                        opacity: 0.6, // Reduces visibility
                      }}
                    >
                      UI/UX Design
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box p="8px">
              <Link
                to="/about"
                style={
                  location.pathname === "/about" ? activeLinkStyle : linkStyle
                }
              >
                About Us
              </Link>
            </Box>
            <Box p="8px">
              <Link
                to="/contact"
                style={
                  location.pathname === "/contact" ? activeLinkStyle : linkStyle
                }
              >
                Contact Us
              </Link>
            </Box>
          </Flex>

          <Button
            bgColor={"#a020f0"}
            color={"white"}
            onClick={onOpen}
            className="no-animation"
            _hover={{ bg: "purple.900", color: "white" }}
          >
            Register
          </Button>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onDrawerOpen}
          variant="outline"
          aria-label="Open Menu"
        />
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />

          <ModalContent bgColor="#f2f2f2" w="1000px" p="30px">
            <ModalCloseButton />

            <ModalBody>
              <RegisterForm />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>

      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack as="nav" spacing="4" alignItems={"start"}>
              <Box p="8px">
                <Link
                  to="/"
                  style={
                    location.pathname === "/" ? activeLinkStyle : linkStyle
                  }
                >
                  Home
                </Link>
              </Box>
              <Box p="8px">
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg="none"
                    fontSize={"13px"}
                    _hover={{ color: "purple.600" }}
                  >
                    Courses
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link
                        to="/uxresearch"
                        style={
                          location.pathname === "/uxresearch"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        UX Research
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/productDesign"
                        style={
                          location.pathname === "/productDesign"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Product Design
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/frontendDev"
                        style={
                          location.pathname === "/frontendDev"
                            ? activeLinkStyle
                            : linkStyle
                        }
                      >
                        Frontend Development
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/uidesigncourse"
                        style={{
                          pointerEvents: "none", // Disables clicks
                          color: "gray", // Makes it look disabled
                          opacity: 0.6, // Reduces visibility
                        }}
                      >
                        UI Design
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/uxdesigncourse"
                        style={{
                          pointerEvents: "none", // Disables clicks
                          color: "gray", // Makes it look disabled
                          opacity: 0.6, // Reduces visibility
                        }}
                      >
                        UX Design
                      </Link>
                    </MenuItem>

                    <MenuItem>
                      <Link
                        to="/idcourse"
                        style={{
                          pointerEvents: "none", // Disables clicks
                          color: "gray", // Makes it look disabled
                          opacity: 0.6, // Reduces visibility
                        }}
                      >
                        Interaction Design
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/dtcourse"
                        style={{
                          pointerEvents: "none", // Disables clicks
                          color: "gray", // Makes it look disabled
                          opacity: 0.6, // Reduces visibility
                        }}
                      >
                        Design Thinking
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/uiuxdesigncourse"
                        style={{
                          pointerEvents: "none", // Disables clicks
                          color: "gray", // Makes it look disabled
                          opacity: 0.6, // Reduces visibility
                        }}
                      >
                        UI/UX Design
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box p="8px">
                <Link
                  to="/about"
                  style={
                    location.pathname === "/about" ? activeLinkStyle : linkStyle
                  }
                >
                  About Us
                </Link>
              </Box>
              <Box p="8px">
                <Link
                  to="/contact"
                  target="_blank"
                  style={
                    location.pathname === "/contact"
                      ? activeLinkStyle
                      : linkStyle
                  }
                >
                  Contact Us
                </Link>
              </Box>

              <Button bgColor={"#a020f0"} color={"white"} onClick={onOpen}>
                Register
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </chakra.header>
  );
}
