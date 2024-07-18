import { Box, VStack, Text, Image, Center } from "@chakra-ui/react";
import React from "react";

const VirtualClasses = () => {
  return (
    <div>
      <Box mt="80px">
        <VStack>
          <Box w={{ base: "300px", md: "350px", lg: "400px" }}>
            <Center>
              <VStack textAlign={"center"} w={"80%"}>
                <Text fontWeight={"600"}>
                  Our virtual classes have a physical feel{" "}
                </Text>
                <Text fontSize={"sm"}>
                  We connect with you all through the moment we teach you in the
                  live classes we have.
                </Text>
              </VStack>
            </Center>
          </Box>
          <Image
            width={"fit-content"}
            mt={{ base: "30px", md: "30px", lg: "64px" }}
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1717962497/SSD/Frame_17_xpsx84.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default VirtualClasses;
