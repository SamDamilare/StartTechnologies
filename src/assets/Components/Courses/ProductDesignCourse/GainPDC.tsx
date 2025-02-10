import { Flex, Text, Box, Image, SimpleGrid, GridItem } from "@chakra-ui/react";
import RegisterNowButton from "../../NewTabs/RegisterNowButton";

const GainPDC = () => {
  return (
    <div>
      <Box
        ml={{ base: "20px", md: "20px", lg: "160px" }}
        mr={{ base: "20px", md: "20px", lg: "160px" }}
        mt="100px"
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          gap={{ base: "40px", md: "40px", lg: "70px" }}
          alignItems={"start"}
        >
          <GridItem>
            <Text fontWeight={700}>What will you gain?</Text>
            <Text mt="10px">
              By enrolling in Velarix’s UX Research course, you’ll:{" "}
            </Text>
            <Box width={"80%"}>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978775/SSD/3d-cube-scan_totpjy.svg" />
                <Text fontSize={"sm"}>Pick Your Course</Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738984268/SSD/3d-rotate_grfuoe.svg" />
                <Text fontSize={"sm"}>
                  We’ll prep you with everything you need to succeed.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978753/SSD/3d-square_zgn00y.svg" />
                <Text fontSize={"sm"}>Pick Your Course</Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978755/SSD/3dcube_azc3er.svg" />
                <Text fontSize={"sm"}>Pick Your Course</Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1739184191/SSD/3square_sekegz.png" />
                <Text fontSize={"sm"}>Pick Your Course</Text>
              </Flex>
              <Text mt="10px">
                At Velarix, we empower you to dream big and design a brighter
                future. Join us and start your Product design journey today!
              </Text>
            </Box>

            <RegisterNowButton />
          </GridItem>
          <GridItem>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719762486/SSD/Frame_59_oepa5t.png" />
          </GridItem>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default GainPDC;
