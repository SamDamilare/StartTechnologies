// import React from "react";
import {
  Heading,
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const UIDCourseEnroll = () => {
  return (
    <div>
      <Box
        ml={{ base: "30px", md: "30px", lg: "160px" }}
        mr={{ base: "30px", md: "30px", lg: "160px" }}
        mt="100px"
      >
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          gap={{ base: "40px", md: "40px", lg: "70px" }}
          alignItems={"end"}
        >
          <GridItem>
            <Image src="https://res.cloudinary.com/dktrwqio1/image/upload/v1719757932/SSD/Frame_42_ksfh7y.png" />
          </GridItem>
          <GridItem>
            <Heading>Enroll with us Today</Heading>
            <Text fontSize={"sm"}>
              You can enroll in a Star School of Design course anytime online.
              If you have questions about the course curriculum, or financing
              and scholarship opportunities, our team is here to help.
              <br /> <br />
              Complete a quick enrollment by confirming when and where you'd
              like to learn and selecting your payment options.
              <br /> <br />
              Congratulations! SSD will provide you with everything you need to
              know in advance of your course kick-off so you’re prepared and
              ready to thrive.
            </Text>
          </GridItem>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default UIDCourseEnroll;
