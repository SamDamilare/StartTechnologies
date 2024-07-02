import React from "react";
import { Text, Box, VStack, Button, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <div>
      <VStack alignItems={"center"}>
        <Box mt="60px" w="952px">
          <Text
            fontSize={"45px"}
            textAlign={"center"}
            fontWeight={600}
            color="#a020f0"
          >
            Accelerate <span style={{ color: "#50585f" }}>Your Career in </span>
            UI/UX Design
          </Text>
        </Box>
        <Box width="760px">
          <Text fontSize={"20px"} textAlign={"center"}>
            Level-up your design skills and accelerate your design career by
            learning how to build stunning visual interfaces and interactive
            prototypes using cutting-edge tool
          </Text>
        </Box>

        <Button bgColor="#a020f0" color="white" w="200px" mt="20px">
          Register
        </Button>
        <Image
          w="58%"
          mt="20px"
          src="https://res.cloudinary.com/dktrwqio1/image/upload/v1717497308/SSD/Rectangle_1_gssaj3.png"
        />
      </VStack>
    </div>
  );
};

export default HeroSection;
