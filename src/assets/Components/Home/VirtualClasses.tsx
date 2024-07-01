import React from "react";
import {
  Text,
  Image,
  Stack,
  Button,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";

const VirtualClasses = () => {
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
              <Button bgColor="#a020f0" variant="solid" color="white">
                Submit CV
              </Button>
              <Button colorScheme="none" variant="outline" color={"#a020f0"}>
                Contact Us
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
    </div>
  );
};

export default VirtualClasses;
