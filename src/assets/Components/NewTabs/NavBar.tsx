import {
  Flex,
  Button,
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
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <chakra.header
      id="header"
      ml={{ base: "10px", md: "50px", lg: "130px" }}
      mr={{ base: "10px", md: "50px", lg: "130px" }}
      fontSize={{ base: "10px", md: "13px" }}
    >
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* Logo */}
        <Text mr={{ base: "auto", md: "273px" }}>
          <Link to="/">SSD</Link>
        </Text>

        {/* Desktop Nav Items */}
        <Flex
          as="nav"
          display={{ base: "none", md: "flex" }}
          gap="240px"
          alignItems={"center"}
        >
          <Flex spacing="2" mr="auto" alignItems={"center"}>
            <Box p="8px">
              <Link to="/">Home</Link>
            </Box>
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
            </Box>
            <Box p="8px">
              <Link to="/about">About Us</Link>
            </Box>
            <Box p="8px">
              <Link to="/contact">Contact Us</Link>
            </Box>
          </Flex>
          <Button bgColor={"#a020f0"} color={"white"} onClick={onOpen}>
            Register
          </Button>
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onDrawerOpen}
          variant="outline"
          aria-label="Open Menu"
        />

        {/* Register Modal */}
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

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack as="nav" spacing="4" alignItems={"start"}>
              <Box p="8px">
                <Link to="/">Home</Link>
              </Box>
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
              </Box>
              <Box p="8px">
                <Link to="/about">About Us</Link>
              </Box>
              <Box p="8px">
                <Link to="/contact">Contact Us</Link>
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
