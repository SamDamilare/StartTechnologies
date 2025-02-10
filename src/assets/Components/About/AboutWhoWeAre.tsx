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

const AboutWhoWeAre = () => {
  return (
    <div>
      <Center>
        <Box
          w={{ base: "300px", md: "600px", lg: "952px" }}
          ml={{ base: "30px", md: "30px", lg: "160px" }}
          mr={{ base: "30px", md: "30px", lg: "160px" }}
          mt="62px"
        >
          <SimpleGrid
            justifyContent={{ base: "center", md: "left", lg: "center" }}
            columns={{ base: 1, md: 1, lg: 2 }}
            gap={{ base: "40px", md: "40px", lg: "70px" }}
          >
            <GridItem textAlign={{ base: "start", md: "start", lg: "start" }}>
              <Heading>Who we are?</Heading>
              <Text fontSize={"sm"} mt="20px">
                At Velarix, our expert team crafts learning experiences that
                ignite creativity and transform careers. We offer comprehensive
                online courses and resources that make top-tier tech education
                accessible and affordable for everyone. Join us to build the
                future you envision.
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
            <GridItem>
              <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719653108/SSD/Frame_40_cour1a.png" />
            </GridItem>
          </SimpleGrid>
        </Box>
      </Center>
    </div>
  );
};

export default AboutWhoWeAre;
