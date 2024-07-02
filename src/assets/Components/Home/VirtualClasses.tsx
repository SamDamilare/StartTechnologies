import React from "react";
import SubmitCV from "../NewTabs/SubmitCV";
import {
  Text,
  Image,
  Stack,
  Button,
  Box,
  Center,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const VirtualClasses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box m="10">
        <Center>
          <Stack textAlign={"center"} w="400px">
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Our virtual classes have a physical fee
            </Text>
            <Text>
              We connect with you all through the moment we teach you in the
              live classes we have.
            </Text>

            <Flex
              direction="row"
              gap={"70px"}
              //   align="center"
              //   alignItems="center"
              justifyContent={"center"}
            >
              <Button
                bgColor="#a020f0"
                variant="solid"
                color="white"
                onClick={onOpen}
              >
                Submit CV
              </Button>
              <Button colorScheme="none" variant="outline" color={"#a020f0"}>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </Flex>
          </Stack>
        </Center>
      </Box>
      <Image
        w="100%"
        h="60wh"
        src="https://res.cloudinary.com/dktrwqio1/image/upload/v1717962497/SSD/Frame_17_xpsx84.png"
      />
      <Center>
        <Stack textAlign={"center"} w="400px">
          <Text>Get Internship placements</Text>
          <Text>
            We have a pool of ready projects ready to be live that you can get
            your hands on to add to your portfolio.
          </Text>
        </Stack>
      </Center>
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
            <SubmitCV />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VirtualClasses;
