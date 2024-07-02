import { Image, Box, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";

const AboutHeroes = () => {
  return (
    <div>
      <VStack alignItems={"center"}>
        <Box mt="60px" w="952px">
          <Text fontSize={"48px"} textAlign={"center"} fontWeight={600}>
            We are the Star of Design
          </Text>
        </Box>
        <Box width="760px">
          <Text fontSize={"20px"} textAlign={"center"}>
            There has never been a better time in history to build digital
            products! We help our students advance their careers in Product
            Management and we partner with Fortune 500 companies to upskill
            their product teams.
          </Text>
        </Box>

        <Image
          w="58%"
          mt="20px"
          src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719494738/SSD/Rectangle_1_1_vbc9vx.png"
        />
      </VStack>
    </div>
  );
};

export default AboutHeroes;
