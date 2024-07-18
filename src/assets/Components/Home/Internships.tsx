import {
  Box,
  VStack,
  Text,
  Image,
  Center,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SubmitCV from "../NewTabs/SubmitCV";

const VirtualClasses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Box
        mt="80px"
        ml={{ base: "20px", md: "20px", lg: "160px" }}
        mr={{ base: "20px", md: "20px", lg: "160px" }}
      >
        <VStack>
          <Box w={{ base: "300px", md: "350px", lg: "400px" }}>
            <Center>
              <VStack textAlign={"center"} w={"80%"}>
                <Text fontWeight={"600"}>Get Internship placements </Text>
                <Text fontSize={"sm"}>
                  We have a pool of ready projects ready to be live that you can
                  get your hands on to add to your portfolio.
                </Text>
              </VStack>
            </Center>
          </Box>

          <Box>
            <SimpleGrid
              columns={{ base: 1, md: 1, lg: 2 }}
              gap={{ base: "20px", md: "20px", lg: "40px" }}
              w={{ base: "300px", md: "350px", lg: "400px" }}
              mt="40px"
            >
              <Button
                w={{ base: "full", md: "full", lg: "150px" }}
                bgColor={"#a020ef"}
                color={"white"}
                onClick={onOpen}
              >
                Submit CV
              </Button>
              <Link to="/contact">
                <Button
                  bgColor={"transparent"}
                  colorScheme="#a020ef"
                  variant="outline"
                  color={"#a020ef"}
                  w={{ base: "full", md: "full", lg: "150px" }}
                >
                  Contact Us
                </Button>
              </Link>
            </SimpleGrid>
          </Box>

          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt={{ base: "30px", md: "30px", lg: "64px" }}
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1720144850/SSD/Rectangle_16_1_d0xram.png"
          />
        </VStack>
      </Box>
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
