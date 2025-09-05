// import React from "react";
import {
  Heading,
  VStack,
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const UXResearchJourney = () => {
  return (
    <div>
      <Box
        mt="62px"
        ml={{ base: "20px", md: "20px", lg: "160px" }}
        mr={{ base: "20px", md: "20px", lg: "160px" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          gap={{ base: "40px", md: "40px", lg: "70px" }}
          alignItems={"center"}
        >
          <GridItem>
            <VStack alignItems={"start"}>
              <Heading fontSize={"2xl"}>
                Why start your journey with Velarix?
              </Heading>
              <Text fontSize={"sm"} mt="10px">
                Master UX Research and launch a career in user-centered design.
                Our course helps you gain practical skills in user research,
                usability testing, and data analysis, earn industry-recognized
                certifications to stand out to employers and access real-world
                projects and internship opportunities with just ₦ 70,000
              </Text>
              <Box
                bgColor={"white"}
                p="10px"
                height={"100px"}
                borderRadius={"10px"}
                boxShadow={"10px black"}
                mt="10px"
              >
                <VStack alignItems={"flex-start"}>
                  <Text>Kick off:</Text>
                  <Text fontWeight={700} fontSize={"3xl"}>
                    October, 2025
                  </Text>
                </VStack>
              </Box>
            </VStack>
          </GridItem>
          <GridItem>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719760180/SSD/Frame_45_dyqkuc.png" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default UXResearchJourney;
