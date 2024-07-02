import React from "react";
import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react";
import ReuseHeroes from "../../NewTabs/ReuseHeroes";

const UXResearchHeroes = () => {
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
              UX <span style={{ color: "#a020f0" }}>Research</span> Course
            </Text>
          </Box>

          <ReuseHeroes />
          <Image
            w="58%"
            mt="40px"
            src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719761981/SSD/Rectangle_1_6_azjiit.png"
          />
        </VStack>
      </Box>
    </div>
  );
};

export default UXResearchHeroes;
