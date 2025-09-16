import {
  Heading,
  VStack,
  Text,
  Box,
  Image,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";

const JourneyFC = () => {
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
                Velarix is your go-to tech academy for mastering in-demand
                skills and launching a successful career in tech. Our Frontend
                Development course is designed to help you gain practical,
                job-ready skills in HTML, CSS, JavaScript, and modern frameworks
                with just ₦ 100,000
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

export default JourneyFC;
