import { Flex, Text, Box, Image, SimpleGrid, GridItem } from "@chakra-ui/react";
import RegisterNowButton from "../../NewTabs/RegisterNowButton";

const GainFC = () => {
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
              At Velarix, our Frontend Development course is more than just
              coding—it’s your gateway to building the web of tomorrow. Here’s
              what you’ll get:{" "}
            </Text>
            <Box width={"80%"}>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978775/SSD/3d-cube-scan_totpjy.svg" />
                <Text fontSize={"sm"}>
                  Master HTML, CSS, JavaScript, and modern frameworks like
                  React.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738984268/SSD/3d-rotate_grfuoe.svg" />
                <Text fontSize={"sm"}>
                  Create dynamic, responsive websites and apps for your
                  portfolio.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978753/SSD/3d-square_zgn00y.svg" />
                <Text fontSize={"sm"}>
                  Learn from seasoned developers who’ll guide you every step of
                  the way.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1738978755/SSD/3dcube_azc3er.svg" />
                <Text fontSize={"sm"}>
                  Collaborate with peers, mentors, and industry professionals.
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap="15px" mt="10px">
                <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1739184191/SSD/3square_sekegz.png" />
                <Text fontSize={"sm"}>
                  Gain the skills to land a job, freelance, or level up in your
                  tech career.
                </Text>
              </Flex>
              <Text mt="10px">
                Velarix doesn’t just teach code—we help you build your future.
                Ready to start? Let’s go!
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

export default GainFC;
