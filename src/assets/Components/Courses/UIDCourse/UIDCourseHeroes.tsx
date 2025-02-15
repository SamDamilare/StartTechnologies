// import React from "react";
import { Box, Text, Image, VStack } from "@chakra-ui/react";
import ReuseHeroes from "../../NewTabs/ReuseHeroes";

const UIDCourseHeroes = () => {
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
              User <span style={{ color: "#a020f0" }}>Interface</span> Design
              Course
            </Text>
          </Box>
          <ReuseHeroes content="" />
          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt="40px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719752718/SSD/Rectangle_1_4_hakaph.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default UIDCourseHeroes;
