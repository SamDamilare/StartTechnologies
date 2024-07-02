import React from "react";
import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react";
import ReuseHeroes from "../../NewTabs/ReuseHeroes";

const UXDCourseHeroes = () => {
  return (
    <div>
      <Box>
        <VStack alignItems={"center"}>
          <Box mt="60px" w="952px">
            <Text
              fontSize={"48px"}
              textAlign={"center"}
              fontWeight={600}
              color="#50585f"
            >
              User <span style={{ color: "#a020f0" }}>Experience</span> Design
              Course
            </Text>
          </Box>
          <ReuseHeroes />
          <Image
            w="58%"
            mt="40px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719759825/SSD/Rectangle_1_5_qmuuuv.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default UXDCourseHeroes;
