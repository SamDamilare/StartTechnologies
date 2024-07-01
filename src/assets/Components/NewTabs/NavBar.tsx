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
  Image,
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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// import { Link } from "react-scroll";

import React from "react";

export default function NavBar() {
  return (
    <chakra.header id="header" ml="130px" mr="130px" fontSize={"13px"}>
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        {/* // Logo */}
        <Text mr="273px">SSD</Text>
        {/* // Nav Items */}
        <HStack as="nav">
          <HStack spacing="2" mr="243px">
            <Box p="8px">
              <a href="">Home</a>{" "}
            </Box>{" "}
            <Box p="8px">
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="none"
                >
                  Courses
                </MenuButton>
                <MenuList>
                  <MenuItem>Product Design</MenuItem>
                  <MenuItem>UI Design</MenuItem>
                  <MenuItem>UX Design</MenuItem>
                  <MenuItem>UX Reearch</MenuItem>
                  <MenuItem>Interaction Design</MenuItem>
                  <MenuItem>Design Thinking</MenuItem>
                  <MenuItem>Product Management</MenuItem>
                </MenuList>
              </Menu>
            </Box>{" "}
            <Box p="8px">
              <a href="">About Us</a>{" "}
            </Box>{" "}
            <Box p="8px">
              <a href="">Contact Us</a>{" "}
            </Box>
          </HStack>
          <Button>Register</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
