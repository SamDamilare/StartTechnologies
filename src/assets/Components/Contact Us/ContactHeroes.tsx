import React from "react";
import { Text, Box, VStack, Image } from "@chakra-ui/react";

const ContactHeroes = () => {
  return (
    <div>
      <VStack alignItems={"center"}>
        <Box mt="60px" w="952px">
          <Text fontSize={"48px"} textAlign={"center"}>
            We care about You
          </Text>
        </Box>
        <Box width="760px">
          <Text fontSize={"20px"} textAlign={"center"}>
            You have questions about our services? Contact us
          </Text>
        </Box>

        <Image
          w="58%"
          mt="20px"
          src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719673796/SSD/Image_ok156s.png"
        />
      </VStack>
    </div>
  );
};

export default ContactHeroes;
