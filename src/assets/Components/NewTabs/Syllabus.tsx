import {
  Box,
  Button,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Syllabus = () => {
  return (
    <div>
      <Box
        bgColor={"#edf1f2"}
        w="full"
        pt={4}
        pb={4}
        mt={4}
        mb={4}
        alignContent={"center"}
      >
        <Box
          ml={{ base: "30px", md: "30px", lg: "160px" }}
          mr={{ base: "30px", md: "30px", lg: "160px" }}
          mt="60px"
        >
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            gap={{ base: "40px", md: "40px", lg: "70px" }}
            alignItems={"center"}
          >
            <GridItem>
              <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719915395/SSD/Phone_Mockup_rfk7wy.png" />
            </GridItem>
            <GridItem>
              <Box>
                <Text fontSize="45px" fontWeight={"600"}>
                  View our Syllabus
                </Text>
                <Text fontSize={"sm"} mt="10px">
                  You are interested in joining our classes and you need to know
                  our syllabus and time table. See our Syllabus{" "}
                </Text>
                <Button mt="20px" bgColor={"#a020f0"} color={"white"}>
                  See our syllabus
                </Button>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Syllabus;
