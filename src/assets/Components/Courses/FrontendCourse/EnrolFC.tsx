import { Text, Box, Image, SimpleGrid, GridItem, Flex } from "@chakra-ui/react";

import RegisterNowButton from "../../NewTabs/RegisterNowButton";

const EnrolFC = () => {
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
          alignItems={"end"}
        >
          <GridItem>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719762375/SSD/Frame_58_oydvxg.png" />
          </GridItem>
          <GridItem>
            <Text fontWeight={700}>Enroll with us Today</Text>
            <Text mt="10px">
              Ready to dive into Frontend Development? Enrolling is simple:
            </Text>
            <Box width={"80%"}>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978775/SSD/3d-cube-scan_totpjy.svg" />
                <Text fontSize={"sm"}>
                  Pick the program that fits your goals.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978755/SSD/3dcube_azc3er.svg" />
                <Text fontSize={"sm"}>
                  Connect with a Velarix Learning Advisor to discuss course
                  details, financing, or scholarships.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978753/SSD/3d-square_zgn00y.svg" />
                <Text fontSize={"sm"}>
                  Once enrolled, Gain practical, job-ready skills in{" "}
                  <span style={{ fontStyle: "italic" }}>
                    HTML, CSS, JavaScript, and modern frameworks.
                  </span>
                </Text>
              </Flex>
            </Box>
            <Text mt="10px">
              Access exclusive opportunities to gain real-world experience.
            </Text>
            <RegisterNowButton />
          </GridItem>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default EnrolFC;
