import {
  Box,
  SimpleGrid,
  Heading,
  VStack,
  Link,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { footerLinks } from "../../utilities/data";

const Footer = () => {
  return (
    <Box
      px={["24px", "24px", "100px"]}
      py={"32px"}
      bgColor={"#440467"}
      color={"white"}
      mt="160px"
    >
      <Grid templateColumns="repeat(3, 1fr)" ml="60px">
        <GridItem
          colSpan={[3, 3, 3, 1]}
          mb={["32px", "32px", "40px", "0px"]}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text>SSD</Text>
          <Text
            fontSize={"xs"}
            mt={{ base: "none", md: "none", lg: "155px" }}
            w={{ base: "200px", md: "200px", lg: "100%" }}
          >
            © 2024 Star School of Design. All rights reserved
          </Text>
        </GridItem>
        <GridItem colSpan={[3, 3, 3, 2]}>
          <SimpleGrid columns={[1, 2, 2, 4]}>
            {footerLinks.map((item, idx) => (
              <Box key={idx} mb={["32px", "32px", "40px", "0px"]}>
                <Heading
                  variant={"cardHeading"}
                  fontWeight={"400"}
                  mb={"16px"}
                  fontSize={"lg"}
                >
                  {item.name}
                </Heading>
                <VStack alignItems={"start"} spacing={"14px"} fontSize={"14px"}>
                  {item.links.map((link, idx) => (
                    <Link key={idx} as={ReactLink} to={link.link}>
                      {link.name}
                    </Link>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
