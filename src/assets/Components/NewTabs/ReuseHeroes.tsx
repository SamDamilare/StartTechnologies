import { Box, VStack, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const ReuseHeroes = () => {
  return (
    <div>
      <VStack>
        <Box width="760px">
          <Text fontSize={"20px"} textAlign={"center"}>
            Design High-Impact User Experiences. Research, design, and prototype
            effective, visually-driven websites and apps.
          </Text>
        </Box>

        <Box mt="40px">
          <Flex alignItems={"center"} gap={"32px"}>
            <Box
              bgColor={"#edd3ff"}
              color={"#a020f0"}
              px="16px"
              py="12px"
              borderRadius={"5px"}
            >
              Live Classrom
            </Box>
            <Box
              bgColor={"#edd3ff"}
              color={"#a020f0"}
              px="16px"
              py="12px"
              borderRadius={"5px"}
            >
              4 Months
            </Box>
            <Box
              bgColor={"#edd3ff"}
              color={"#a020f0"}
              px="16px"
              py="12px"
              borderRadius={"5px"}
            >
              Expert Instructions
            </Box>
            <Box
              bgColor={"#edd3ff"}
              color={"#a020f0"}
              px="16px"
              py="12px"
              borderRadius={"5px"}
            >
              Certificate
            </Box>
            <Box
              bgColor={"#edd3ff"}
              color={"#a020f0"}
              px="16px"
              py="12px"
              borderRadius={"5px"}
            >
              Internship
            </Box>
          </Flex>
        </Box>
        <Link to="">
          <Box
            mt="40px"
            bgColor={"#a020f0"}
            color={"white"}
            width={"150px"}
            borderRadius={"5px"}
            alignContent={"center"}
            height={"50px"}
            textAlign={"center"}
          >
            Register
          </Box>
        </Link>
      </VStack>
    </div>
  );
};

export default ReuseHeroes;
