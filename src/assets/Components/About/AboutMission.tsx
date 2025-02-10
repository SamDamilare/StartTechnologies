// import * as React from "react";
import {
  Heading,
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import RegisterNowButton from "../NewTabs/RegisterNowButton";

const AboutMission = () => {
  return (
    <div>
      <Center>
        <Box
          w={{ base: "300px", md: "600px", lg: "952px" }}
          ml={{ base: "20px", md: "30px", lg: "160px" }}
          mr={{ base: "20px", md: "30px", lg: "160px" }}
          mt="62px"
        >
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            alignItems={"end"}
            gap={{ base: "40px", md: "40px", lg: "70px" }}
          >
            <GridItem>
              <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719653127/SSD/Frame_41_zsab6v.png" />
            </GridItem>
            <GridItem>
              <Heading>Mission</Heading>
              <Text fontSize={"sm"} mt="20px">
                At Velarix, we believe quality tech education should be
                accessible to everyone. Our expert-led programs combine
                innovation with flexibility, empowering you to acquire new
                skills and advance your career—regardless of your background.
                Join us to transform your future.
              </Text>
              {/* <Button
                mt="20px"
                px="30px"
                variant="outline"
                color="#a020f0"
                fontWeight={300}
                border="1px"
              >
                Register now
              </Button> */}
              <RegisterNowButton />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
};

export default AboutMission;
