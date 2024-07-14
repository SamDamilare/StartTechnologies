import React from "react";
import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react";
import ReuseHeroes from "../../NewTabs/ReuseHeroes";

const UXResearchHeroes = () => {
  return (
    <div>
      <Box>
        <VStack
          ml={{ base: "20px", md: "20px", lg: "160px" }}
          mr={{ base: "20px", md: "20px", lg: "160px" }}
          alignItems={"center"}
        >
          <Box mt="60px" w={{ base: "300px", md: "600px", lg: "952px" }}>
            <Text
              fontSize={{ base: "20px", md: "40px", lg: "45px" }}
              textAlign={"center"}
              fontWeight={600}
              color="#50585f"
            >
              UX <span style={{ color: "#a020f0" }}>Research</span> Course
            </Text>
          </Box>

          <ReuseHeroes />
          <Image
            w={{ base: "300px", md: "600px", lg: "952px" }}
            mt="40px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719761981/SSD/Rectangle_1_6_azjiit.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default UXResearchHeroes;
