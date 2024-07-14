// import React from "react";
import { Text, Box, VStack, Image } from "@chakra-ui/react";

const ContactHeroes = () => {
  return (
    <div>
      <VStack
        ml={{ base: "20px", md: "20px", lg: "160px" }}
        mr={{ base: "20px", md: "20px", lg: "160px" }}
        alignItems={"center"}
      >
        <Box mt="60px" w={{ base: "300px", md: "600px", lg: "952px" }}>
          <Text
            fontSize={{ base: "20px", md: "40px", lg: "45px" }}
            textAlign={"center"}
          >
            We care about You
          </Text>
        </Box>
        <Box w={{ base: "300px", md: "600px", lg: "952px" }}>
          <Text
            fontSize={{ base: "xs", md: "sm", lg: "20px" }}
            textAlign={"center"}
          >
            You have questions about our services? Contact us
          </Text>
        </Box>

        <Image
          w={{ base: "300px", md: "600px", lg: "952px" }}
          mt="20px"
          src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719673796/SSD/Image_ok156s.png"
        />
      </VStack>
    </div>
  );
};

export default ContactHeroes;
