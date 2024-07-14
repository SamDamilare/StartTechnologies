import React from "react";
import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react";
import ReuseHeroes from "../../NewTabs/ReuseHeroes";

const UIUXDCourseHeroes = () => {
  return (
    <div>
      <Box>
        <VStack
          alignItems={"center"}
          ml={{ base: "20px", md: "20px", lg: "160px" }}
          mr={{ base: "20px", md: "20px", lg: "160px" }}
        >
          <Box mt="60px" w={{ base: "300px", md: "600px", lg: "952px" }}>
            <Text
              fontSize={{ base: "20px", md: "40px", lg: "45px" }}
              textAlign={"center"}
              fontWeight={600}
              color="#50585f"
            >
              UI<span style={{ color: "#a020f0" }}>/UX</span> Design Course
            </Text>
          </Box>
          <ReuseHeroes />
          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt="40px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719758553/SSD/Rectangle_1_lkiet5.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default UIUXDCourseHeroes;
