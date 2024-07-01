import React from "react";
import { Box, Text, Image, Button, Flex, VStack } from "@chakra-ui/react";

const UXResearchHeroes = () => {
  return (
    <div>
      <Box>
        <VStack alignItems={"center"}>
          <Box mt="60px" w="952px">
            <Text fontSize={"48px"} textAlign={"center"}>
              Design Thinking Course
            </Text>
          </Box>
          <Box width="760px">
            <Text fontSize={"20px"} textAlign={"center"}>
              Design High-Impact User Experiences. Research, design, and
              prototype effective, visually-driven websites and apps.
            </Text>
          </Box>

          <Box mt="40px">
            <Flex alignItems={"center"} gap={"32px"}>
              <Button bgColor={"#edd3ff"} color={"#a020f0"}>
                Live Classrom
              </Button>
              <Button bgColor={"#edd3ff"} color={"#a020f0"}>
                4 Months
              </Button>
              <Button bgColor={"#edd3ff"} color={"#a020f0"}>
                Expert Instructions
              </Button>
              <Button bgColor={"#edd3ff"} color={"#a020f0"}>
                Certificate
              </Button>
              <Button bgColor={"#edd3ff"} color={"#a020f0"}>
                Internship
              </Button>
            </Flex>
          </Box>
          <Button
            bgColor={"#a020f0"}
            color={"white"}
            mt="40px"
            px="80px"
            py="16px"
          >
            Register
          </Button>
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
